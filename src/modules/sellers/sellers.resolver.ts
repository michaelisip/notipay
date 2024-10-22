import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SellersService } from './sellers.service';
import { Seller } from './entities';
import { CreateSellerInput, UpdateSellerInput } from './dto';

@Resolver(() => Seller)
export class SellersResolver {
  constructor(private readonly sellersService: SellersService) {}

  @Mutation(() => Seller)
  createSeller(
    @Args('createSellerInput') createSellerInput: CreateSellerInput
  ) {
    return this.sellersService.create(createSellerInput);
  }

  @Query(() => [Seller], { name: 'sellers' })
  findAll() {
    return this.sellersService.findAll();
  }

  @Query(() => Seller, { name: 'seller' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.sellersService.findOne(id);
  }

  @Mutation(() => Seller)
  updateSeller(
    @Args('updateSellerInput') updateSellerInput: UpdateSellerInput
  ) {
    return this.sellersService.update(updateSellerInput.id, updateSellerInput);
  }

  @Mutation(() => Seller)
  removeSeller(@Args('id', { type: () => String }) id: string) {
    return this.sellersService.remove(id);
  }
}
