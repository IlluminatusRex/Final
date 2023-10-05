/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';

import {
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  Min,
  Max,
  IsInt,
  Matches,
  IsEmail,
} from 'class-validator';

export class UpdateOrderDTO {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  courseId: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  lastName: string;

  @IsString()
  message: string;

  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(100000000)
  @Max(999999999)
  phone: number;

  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  @IsEmail()
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  email: string;

  @IsNotEmpty()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  @Min(1)
  totalCost: number;
}