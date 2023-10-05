import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany({ include: { course: true } });
  }

  public getById(id: Order['id']): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
      include: { course: true },
    });
  }

  public deleteById(id: Order['id']): Promise<Order> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }

  public async create(
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    const { courseId, ...otherData } = orderData;
    try {
      return await this.prismaService.order.create({
        data: {
          ...otherData,
          course: {
            connect: { id: courseId },
          },
        },
      });
    } catch (error) {
      if (error.code === 'P2025')
        throw new BadRequestException("course doesn't exist");
      throw error;
    }
  }

  public updateById(
    id: Order['id'],
    orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Order> {
    const { courseId, ...otherData } = orderData;
    return this.prismaService.order.update({
      where: { id },
      data: {
        ...otherData,
        course: {
          connect: { id: courseId },
        },
      },
    });
  }
}