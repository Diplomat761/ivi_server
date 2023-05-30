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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const files_service_1 = require("../files/files.service");
const images_model_1 = require("./images.model");
let ImagesService = class ImagesService {
    constructor(imageRepository, fileService) {
        this.imageRepository = imageRepository;
        this.fileService = fileService;
    }
    async create(dto, image) {
        const fileName = await this.fileService.createFile(image);
        const img = await this.imageRepository.create(Object.assign(Object.assign({}, dto), { url: fileName }));
        return fileName;
    }
    async getAllImages() {
        const posts = await this.imageRepository.findAll({
            include: { all: true },
        });
        return posts;
    }
    async getImageById(id) {
        const image = await this.imageRepository.findOne({
            where: { id },
            include: { all: true },
        });
        return image;
    }
    async updateImage(id, { tableName, recordId }) {
        const updatedImage = await this.imageRepository.update({ tableName, recordId }, {
            returning: true,
            where: { id },
        });
        return updatedImage;
    }
    async deleteByTime() {
        try {
            const oneHourAgo = new Date(Date.now() - 3600 * 1000);
            const images = await this.imageRepository.findAll({
                where: { createdAt: { [sequelize_2.Op.lt]: oneHourAgo } },
            });
            for (const image of images) {
                await image.destroy({ force: true });
            }
            return images;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async deleteUnusedImages() {
        await this.imageRepository.destroy({
            where: { recordId: null, tableName: null },
        });
    }
};
ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(images_model_1.Image)),
    __metadata("design:paramtypes", [Object, files_service_1.FilesService])
], ImagesService);
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map