import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Seller } from '@prisma/client';
import { CreateSellerInput, UpdateSellerInput } from './dto';

@Injectable()
export class SellersService {
  constructor(private prismaService: PrismaService) {}

  async create(createSellerInput: CreateSellerInput): Promise<Seller> {
    return await this.prismaService.seller.create({
      data: {
        ...createSellerInput,
      },
    });
  }

  async findAll(): Promise<Seller[]> {
    return await this.prismaService.seller.findMany();
  }

  async findOne(id: string): Promise<Seller> {
    return await this.prismaService.seller.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateSellerInput: UpdateSellerInput
  ): Promise<Seller> {
    return await this.prismaService.seller.update({
      where: { id },
      data: {
        ...updateSellerInput,
      },
    });
  }

  async remove(id: string): Promise<Seller> {
    return await this.prismaService.seller.delete({
      where: { id },
    });
  }
}
