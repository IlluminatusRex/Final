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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const courses_service_1 = require("./courses.service");
const common_2 = require("@nestjs/common");
const create_Course_dto_1 = require("./dto/create-Course.dto");
const update_Course_dto_1 = require("./dto/update-Course.dto");
let CoursesController = class CoursesController {
    constructor(CoursesService) {
        this.CoursesService = CoursesService;
    }
    getAll() {
        return this.CoursesService.getAll();
    }
    async getById(id) {
        const Course = await this.CoursesService.getById(id);
        if (!Course)
            throw new common_1.NotFoundException('Course not found');
        return Course;
    }
    getAllExtended() {
        return this.CoursesService.getAllExtended();
    }
    async getExtendedById(id) {
        const Course = await this.CoursesService.getByIdExtended(id);
        if (!Course)
            throw new common_1.NotFoundException('Course not found');
        return Course;
    }
    async deleteById(id) {
        if (!(await this.CoursesService.getById(id)))
            throw new common_1.NotFoundException('Course not found');
        this.CoursesService.deleteById(id);
        return { success: true };
    }
    create(CourseData) {
        return this.CoursesService.create(CourseData);
    }
    async update(id, CourseData) {
        if (!(await this.CoursesService.getById(id)))
            throw new common_1.NotFoundException('Course not found');
        await this.CoursesService.updateById(id, CourseData);
        return { success: true };
    }
};
exports.CoursesController = CoursesController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CoursesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/extended'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CoursesController.prototype, "getAllExtended", null);
__decorate([
    (0, common_1.Get)('/extended/:id'),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "getExtendedById", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Course_dto_1.CreateCourseDTO]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_2.ParseUUIDPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_Course_dto_1.UpdateCourseDTO]),
    __metadata("design:returntype", Promise)
], CoursesController.prototype, "update", null);
exports.CoursesController = CoursesController = __decorate([
    (0, common_1.Controller)('Courses'),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
//# sourceMappingURL=courses.controller.js.map