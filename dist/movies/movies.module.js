"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const auth_module_1 = require("../auth/auth.module");
const comment_model_1 = require("../comment/comment.model");
const movie_person_model_1 = require("../person/movie-person.model");
const person_model_1 = require("../person/person.model");
const person_module_1 = require("../person/person.module");
const movies_controller_1 = require("./movies.controller");
const movies_model_1 = require("./movies.model");
const movies_service_1 = require("./movies.service");
let MoviesModule = class MoviesModule {
};
MoviesModule = __decorate([
    (0, common_1.Module)({
        controllers: [movies_controller_1.MoviesController],
        providers: [movies_service_1.MoviesService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([movies_model_1.Movie, person_model_1.Person, movie_person_model_1.MoviePerson, comment_model_1.Comment]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            person_module_1.PersonModule,
        ],
    })
], MoviesModule);
exports.MoviesModule = MoviesModule;
//# sourceMappingURL=movies.module.js.map