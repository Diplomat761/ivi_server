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
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const roles_auth_decorator_1 = require("../auth/utils/roles-auth.decorator");
const roles_guard_1 = require("../auth/utils/guards/roles.guard");
const update_movie_dto_1 = require("./dto/update-movie.dto");
const movies_service_1 = require("./movies.service");
let MoviesController = class MoviesController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    update(id, dto) {
        return this.movieService.update(id, dto);
    }
    getMovieByActor(id) {
        return this.movieService.getMovieByActor(id);
    }
    getMovieByDirector(id) {
        return this.movieService.getMovieByDirector(id);
    }
    getById(id) {
        return this.movieService.getMoviesById(id);
    }
    createMovie(movieDataList) {
        return this.movieService.createMovie(movieDataList);
    }
    createMoviePerson(moviePersonDataList) {
        return this.movieService.createMoviePerson(moviePersonDataList);
    }
    async searchMovies({ genre, country, years, rating, sort, minRatingCount, maxRatingCount, page, directorName, actorName, }) {
        const genreIds = genre ? genre.toString().split(",").map(Number) : [];
        const countryIds = country ? country.toString().split(",").map(Number) : [];
        return this.movieService.searchMovies(genreIds, countryIds, years, rating, sort, minRatingCount, maxRatingCount, page, directorName, actorName);
    }
    getСarousel() {
        return this.movieService.getPromoMovie();
    }
    getRec() {
        return this.movieService.getRecMovie();
    }
    getFavorite() {
        return this.movieService.getFavoriteMovie();
    }
};
__decorate([
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Put)("/update/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_movie_dto_1.updateMovieDto]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "update", null);
__decorate([
    (0, common_1.Get)("/actor/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "getMovieByActor", null);
__decorate([
    (0, common_1.Get)("/director/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "getMovieByDirector", null);
__decorate([
    (0, common_1.Get)("/film/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "getById", null);
__decorate([
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "createMovie", null);
__decorate([
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)("/movpers"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "createMoviePerson", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "searchMovies", null);
__decorate([
    (0, common_1.Get)("/promo"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "get\u0421arousel", null);
__decorate([
    (0, common_1.Get)("/weeklyTop"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "getRec", null);
__decorate([
    (0, common_1.Get)("/collection/favorite"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesController.prototype, "getFavorite", null);
MoviesController = __decorate([
    (0, common_1.Controller)("movies"),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map