import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductInput, UpdateProductInput } from './dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async create(createProductInput: CreateProductInput): Promise<Product> {
    return await this.prismaService.product.create({
      data: {
        ...createProductInput,
      },
    });
  }

  async findAll(): Promise<Product[]> {
    return await this.prismaService.product.findMany({
      include: {
        seller: true,
      },
    });
  }

  async findOne(id: string): Promise<Product> {
    return await this.prismaService.product.findUnique({
      where: { id },
      include: {
        seller: true,
      },
    });
  }

  async update(
    id: string,
    updateProductInput: UpdateProductInput
  ): Promise<Product> {
    return this.prismaService.product.update({
      where: { id },
      data: {
        ...updateProductInput,
      },
    });
  }

  async remove(id: string): Promise<Product> {
    return await this.prismaService.product.delete({
      where: { id },
    });
  }
}
