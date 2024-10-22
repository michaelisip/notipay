import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Product } from 'src/modules/products/entities';
import { Seller } from 'src/modules/sellers/entities';

@ObjectType()
export class Order {
  @Field(() => String)
  id: string;

  @Field(() => String)
  sellerId: string;

  @Field(() => Seller)
  seller: Seller;

  @Field(() => String)
  productId: string;

  @Field(() => Product)
  product: Product;

  @Field(() => Int, { defaultValue: 0 })
  quantity?: number;

  @Field(() => Float, { defaultValue: 0 })
  totalPrice?: number;

  @Field(() => String, { defaultValue: 'pending' })
  status?: string;

  @Field(() => Date, { defaultValue: new Date() })
  orderDate?: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
