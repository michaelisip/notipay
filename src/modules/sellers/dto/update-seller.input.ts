import { CreateSellerInput } from './create-seller.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSellerInput extends PartialType(CreateSellerInput) {
  @Field(() => String)
  id: string;
}
