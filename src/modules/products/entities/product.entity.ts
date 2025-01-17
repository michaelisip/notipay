import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Seller } from 'src/modules/sellers/entities';

@ObjectType()
export class Product {
  @Field(() => String)
  id: string;

  @Field(() => String)
  sellerId: string;

  @Field(() => Seller)
  seller: Seller;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => Float, { defaultValue: 0 })
  price: number;

  @Field(() => Int, { defaultValue: 0 })
  stockQuantity: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
