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
exports.GenreService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const genre_model_1 = require("./genre.model");
let GenreService = class GenreService {
    constructor(genreRepository) {
        this.genreRepository = genreRepository;
    }
    async createGenre(genreDataList) {
        const genres = [];
        for (const genreData of genreDataList) {
            const genre = new genre_model_1.Genre(genreData);
            await genre.save();
            genres.push(genre);
        }
        return genres;
    }
    async create(dto) {
        const created = await this.genreRepository.create(dto);
        throw new common_1.HttpException("Жанр добавлен", common_1.HttpStatus.OK);
    }
    async getAll() {
        const genre = await this.genreRepository.findAll();
        return genre;
    }
    async getById(id) {
        const genre = await this.genreRepository.findOne({
            where: { id },
        });
        return genre;
    }
    async update(id, dto) {
        const [rowsGenre, [updatedGenre]] = await this.genreRepository.update(dto, {
            returning: true,
            where: { id },
        });
        if (rowsGenre === 0 || !updatedGenre) {
            throw new common_1.NotFoundException("Такого жанра не существует");
        }
        throw new common_1.HttpException("Жанр изменен", common_1.HttpStatus.OK);
    }
    async delete(id) {
        const genre = await this.genreRepository.findOne({ where: { id } });
        if (!genre) {
            throw new common_1.HttpException("Такого жанра не существует", common_1.HttpStatus.BAD_REQUEST);
        }
        await genre.destroy();
        throw new common_1.HttpException("Жанр удален", common_1.HttpStatus.OK);
    }
};
GenreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(genre_model_1.Genre)),
    __metadata("design:paramtypes", [Object])
], GenreService);
exports.GenreService = GenreService;
//# sourceMappingURL=genre.service.js.map