import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';
import { CreateOrderInput, UpdateOrderInput } from './dto';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async create(createOrderInput: CreateOrderInput): Promise<Order> {
    return await this.prismaService.order.create({
      data: {
        ...createOrderInput,
      },
      include: {
        product: true,
        seller: true,
      },
    });
  }

  async findAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({
      include: {
        product: true,
        seller: true,
      },
    });
  }

  async findOne(id: string): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: {
        product: true,
        seller: true,
      },
    });
  }

  update(id: string, updateOrderInput: UpdateOrderInput): Promise<Order> {
    return this.prismaService.order.update({
      where: { id },
      data: {
        ...updateOrderInput,
      },
      include: {
        product: true,
        seller: true,
      },
    });
  }

  remove(id: string): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }
}
