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
exports.CountryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const country_model_1 = require("./country.model");
let CountryService = class CountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }
    async createManyCountry(countryDataList) {
        const countrys = [];
        for (const countryData of countryDataList) {
            const country = new country_model_1.Country(countryData);
            await country.save();
            countrys.push(country);
        }
        return countrys;
    }
    async create(dto) {
        const createdCountry = await this.countryRepository.create(dto);
        throw new common_1.HttpException("Страна добавлена", common_1.HttpStatus.OK);
    }
    async getAll() {
        const country = await this.countryRepository.findAll();
        return country;
    }
    async getById(id) {
        const country = await this.countryRepository.findOne({
            where: { id },
        });
        return country;
    }
    async update(id, dto) {
        const [rowsAffected, [updatedCountry]] = await this.countryRepository.update(dto, {
            returning: true,
            where: { id },
        });
        if (rowsAffected === 0 || !updatedCountry) {
            throw new common_1.NotFoundException("Такой страны не существует");
        }
        throw new common_1.HttpException("Страна изменена", common_1.HttpStatus.OK);
    }
    async delete(id) {
        const country = await this.countryRepository.findOne({ where: { id } });
        if (!country) {
            throw new common_1.HttpException("Такой страны не существует", common_1.HttpStatus.BAD_REQUEST);
        }
        await country.destroy();
        throw new common_1.HttpException("Страна удалена", common_1.HttpStatus.OK);
    }
};
CountryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(country_model_1.Country)),
    __metadata("design:paramtypes", [Object])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map