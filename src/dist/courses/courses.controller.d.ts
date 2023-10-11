import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-Course.dto';
import { UpdateCourseDTO } from './dto/update-Course.dto';
export declare class CoursesController {
    private CoursesService;
    constructor(CoursesService: CoursesService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        category: string;
        description: string;
        author: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllExtended(): any;
    getExtendedById(id: string): Promise<{
        id: string;
        category: string;
        description: string;
        author: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(CourseData: CreateCourseDTO): Promise<{
        id: string;
        category: string;
        description: string;
        author: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, CourseData: UpdateCourseDTO): Promise<{
        success: boolean;
    }>;
}
