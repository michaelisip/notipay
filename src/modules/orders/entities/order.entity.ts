import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => String)
  id: string;

  @Field(() => String)
  sellerId: string;

  @Field(() => String)
  productId: string;

  @Field(() => Int, { defaultValue: 0 })
  quantity?: number;

  @Field(() => Float, { defaultValue: 0 })
  totalPrice?: number;

  @Field(() => String)
  status: string;

  @Field(() => Date)
  orderDate: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
