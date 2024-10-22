import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
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

  @Field({ nullable: true })
  orderDate: Date;
}
