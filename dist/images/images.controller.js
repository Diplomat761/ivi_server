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
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const create_image_dto_1 = require("./dto/create-image.dto");
const update_image_dto_1 = require("./dto/update-image.dto");
const images_service_1 = require("./images.service");
let ImagesController = class ImagesController {
    constructor(imageService) {
        this.imageService = imageService;
    }
    createPost(dto, image) {
        return this.imageService.create(dto, image);
    }
    getAll() {
        return this.imageService.getAllImages();
    }
    getOneImage(id) {
        return this.imageService.getImageById(id);
    }
    updateImage(id, dto) {
        return this.imageService.updateImage(id, dto);
    }
    deleteImage() {
        return this.imageService.deleteByTime();
    }
    async deleteUnusedImages() {
        await this.imageService.deleteUnusedImages();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image")),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_image_dto_1.CreateImageDto, Object]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "getOneImage", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_image_dto_1.UpdateImageDto]),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "updateImage", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImagesController.prototype, "deleteImage", null);
__decorate([
    (0, common_1.Delete)("/unused"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteUnusedImages", null);
ImagesController = __decorate([
    (0, swagger_1.ApiTags)("Картинки"),
    (0, common_1.Controller)("images"),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map