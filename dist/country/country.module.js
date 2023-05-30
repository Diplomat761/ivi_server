"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const auth_module_1 = require("../auth/auth.module");
const country_controller_1 = require("./country.controller");
const country_model_1 = require("./country.model");
const country_service_1 = require("./country.service");
let CountryModule = class CountryModule {
};
CountryModule = __decorate([
    (0, common_1.Module)({
        controllers: [country_controller_1.CountryController],
        providers: [country_service_1.CountryService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([country_model_1.Country]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
    })
], CountryModule);
exports.CountryModule = CountryModule;
//# sourceMappingURL=country.module.js.map