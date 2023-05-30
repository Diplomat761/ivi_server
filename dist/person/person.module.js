"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const movies_model_1 = require("../movies/movies.model");
const movie_person_model_1 = require("./movie-person.model");
const person_controller_1 = require("./person.controller");
const person_model_1 = require("./person.model");
const person_service_1 = require("./person.service");
let PersonModule = class PersonModule {
};
PersonModule = __decorate([
    (0, common_1.Module)({
        controllers: [person_controller_1.PersonController],
        providers: [person_service_1.PersonService],
        imports: [sequelize_1.SequelizeModule.forFeature([person_model_1.Person, movies_model_1.Movie, movie_person_model_1.MoviePerson])],
        exports: [person_service_1.PersonService],
    })
], PersonModule);
exports.PersonModule = PersonModule;
//# sourceMappingURL=person.module.js.map