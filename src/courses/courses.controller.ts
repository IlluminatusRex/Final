import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    NotFoundException,
  } from '@nestjs/common';
  import { CoursesService } from './courses.service';
  import { ParseUUIDPipe } from '@nestjs/common';
  import { CreateCourseDTO } from './dto/create-course.dto';
  import { UpdateCourseDTO } from './dto/update-course.dto';
  
  @Controller('Courses')
  export class CoursesController {
    constructor(private CoursesService: CoursesService) {}
  
    @Get('/')
    getAll(): any {
      return this.CoursesService.getAll();
    }
  
    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
      const Course = await this.CoursesService.getById(id);
      if (!Course) throw new NotFoundException('Course not found');
      return Course;
    }
  
    @Get('/extended')
    getAllExtended(): any {
      return this.CoursesService.getAllExtended();
    }
  
    @Get('/extended/:id')
    async getExtendedById(@Param('id', new ParseUUIDPipe()) id: string) {
      const Course = await this.CoursesService.getByIdExtended(id);
      if (!Course) throw new NotFoundException('Course not found');
      return Course;
    }
  
    @Delete('/:id')
    async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
      if (!(await this.CoursesService.getById(id)))
        throw new NotFoundException('Course not found');
      this.CoursesService.deleteById(id);
      return { success: true };
    }
  
    @Post('/')
    create(@Body() CourseData: CreateCourseDTO) {
      return this.CoursesService.create(CourseData);
    }
  
    @Put('/:id')
    async update(
      @Param('id', new ParseUUIDPipe()) id: string,
      @Body() CourseData: UpdateCourseDTO,
    ) {
      if (!(await this.CoursesService.getById(id)))
        throw new NotFoundException('Course not found');
  
      await this.CoursesService.updateById(id, CourseData);
      return { success: true };
    }
  }