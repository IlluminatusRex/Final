/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Course } from '@prisma/client';

@Injectable()
export class CoursesService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Course[]> {
    return this.prismaService.course.findMany();
  }

  public getById(id: Course['id']): Promise<Course | null> {
    return this.prismaService.course.findUnique({
      where: { id },
    });
  }

  public deleteById(id: Course['id']): Promise<Course> {
    return this.prismaService.course.delete({
      where: { id },
    });
  }

  public create(
    CourseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Course> {
    return this.prismaService.course.create({
      data: CourseData,
    });
  }

  public updateById(
    id: Course['id'],
    CourseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Course> {
    return this.prismaService.course.update({
      where: { id },
      data: CourseData,
    });
  }

  public getAllExtended(): Promise<Course[]> {
    return this.prismaService.course.findMany({ include: { orders: true } });
  }
  public getByIdExtended(id: Course['id']): Promise<Course | null> {
    return this.prismaService.course.findUnique({
      where: { id },
      include: { orders: true },
    });
  }
}