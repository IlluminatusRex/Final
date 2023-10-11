import { PrismaService } from 'src/prisma/prisma.service';
import { Course } from '@prisma/client';
export declare class CoursesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Course[]>;
    getById(id: Course['id']): Promise<Course | null>;
    deleteById(id: Course['id']): Promise<Course>;
    create(CourseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<Course>;
    updateById(id: Course['id'], CourseData: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<Course>;
    getAllExtended(): Promise<Course[]>;
    getByIdExtended(id: Course['id']): Promise<Course | null>;
}
