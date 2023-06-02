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
exports.Movie = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const country_model_1 = require("../country/country.model");
const genre_model_1 = require("../genre/genre.model");
const movie_person_model_1 = require("../person/movie-person.model");
const person_model_1 = require("../person/person.model");
const posts_model_1 = require("../posts/posts.model");
let Movie = class Movie extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Movie.prototype, "avatars", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Movie.prototype, "promo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Movie.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Movie.prototype, "original_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, unique: false, allowNull: false }),
    __metadata("design:type", Number)
], Movie.prototype, "rating", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: false, allowNull: false }),
    __metadata("design:type", Number)
], Movie.prototype, "count_rating", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, unique: false, allowNull: false }),
    __metadata("design:type", Number)
], Movie.prototype, "ageLimit", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Movie.prototype, "years", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Movie.prototype, "durations", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => country_model_1.Country),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: false, allowNull: false }),
    __metadata("design:type", Number)
], Movie.prototype, "country_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => country_model_1.Country, "country_id"),
    __metadata("design:type", country_model_1.Country)
], Movie.prototype, "country", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => genre_model_1.Genre),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: false, allowNull: false }),
    __metadata("design:type", Number)
], Movie.prototype, "genre_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => genre_model_1.Genre, "genre_id"),
    __metadata("design:type", genre_model_1.Genre)
], Movie.prototype, "genre", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, unique: false, allowNull: true }),
    __metadata("design:type", String)
], Movie.prototype, "description_EN", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => person_model_1.Person, () => movie_person_model_1.MoviePerson, "movie_id", "person_id"),
    __metadata("design:type", Array)
], Movie.prototype, "actors", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => person_model_1.Person),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Movie.prototype, "director_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => person_model_1.Person, "director_id"),
    __metadata("design:type", person_model_1.Person)
], Movie.prototype, "director", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => posts_model_1.Posts),
    __metadata("design:type", Array)
], Movie.prototype, "posts", void 0);
Movie = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "movies" })
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movies.model.js.map