/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';

import { IsNotEmpty, IsString, Min, IsInt } from 'class-validator';

export class UpdateCourseDTO {
  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(0)
  price: number;

}