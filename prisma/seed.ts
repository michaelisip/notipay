import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Create sample sellers
  const sellers = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      prisma.seller.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
        },
      })
    )
  );

  // Create sample products for each seller
  const products = await Promise.all(
    sellers.flatMap((seller) =>
      Array.from({ length: 3 }).map(() =>
        prisma.product.create({
          data: {
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price()),
            stockQuantity: faker.number.int({ min: 1, max: 100 }),
            sellerId: seller.id,
          },
        })
      )
    )
  );

  // Create sample orders for each product
  await Promise.all(
    products.flatMap((product) =>
      Array.from({ length: 2 }).map(() =>
        prisma.order.create({
          data: {
            sellerId: product.sellerId,
            productId: product.id,
            quantity: faker.number.int({ min: 1, max: 5 }),
            totalPrice: product.price * faker.number.int({ min: 1, max: 5 }),
            status: faker.helpers.arrayElement([
              'pending',
              'shipped',
              'delivered',
            ]),
            orderDate: faker.date.past({ years: 3 }),
          },
        })
      )
    )
  );

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
