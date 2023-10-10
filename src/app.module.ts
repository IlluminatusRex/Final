import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import { CoursesModule } from './courses/courses.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import configuration from './config/configuration';

@Module({
  imports: [
    CoursesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'final-project', 'client', 'build'),
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    OrdersModule, CoursesModule, PrismaModule, ConfigModule.forRoot()],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService, ConfigService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}