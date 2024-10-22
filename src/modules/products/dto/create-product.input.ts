import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  sellerId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Float, { defaultValue: 0 })
  price: number;

  @Field(() => Int, { defaultValue: 0 })
  stockQuantity: number;
}
