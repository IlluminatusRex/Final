"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cors = require("cors");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const orders_module_1 = require("./orders/orders.module");
const courses_controller_1 = require("./courses/courses.controller");
const courses_service_1 = require("./courses/courses.service");
const courses_module_1 = require("./courses/courses.module");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const configuration_1 = require("./config/configuration");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cors()).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            courses_module_1.CoursesModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../', 'final-project', 'client', 'build'),
            }),
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            orders_module_1.OrdersModule, courses_module_1.CoursesModule, prisma_module_1.PrismaModule, config_1.ConfigModule.forRoot()
        ],
        controllers: [app_controller_1.AppController, courses_controller_1.CoursesController],
        providers: [app_service_1.AppService, courses_service_1.CoursesService, config_1.ConfigService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map