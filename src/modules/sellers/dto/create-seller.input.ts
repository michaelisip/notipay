import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateSellerInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  @IsEmail()
  email: string;
}
