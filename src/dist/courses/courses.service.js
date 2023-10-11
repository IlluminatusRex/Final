"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CoursesService = class CoursesService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.course.findMany();
    }
    getById(id) {
        return this.prismaService.course.findUnique({
            where: { id },
        });
    }
    deleteById(id) {
        return this.prismaService.course.delete({
            where: { id },
        });
    }
    create(CourseData) {
        return this.prismaService.course.create({
            data: CourseData,
        });
    }
    updateById(id, CourseData) {
        return this.prismaService.course.update({
            where: { id },
            data: CourseData,
        });
    }
    getAllExtended() {
        return this.prismaService.course.findMany({ include: { orders: true } });
    }
    getByIdExtended(id) {
        return this.prismaService.course.findUnique({
            where: { id },
            include: { orders: true },
        });
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CoursesService);
//# sourceMappingURL=courses.service.js.map