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
exports.Person = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const movies_model_1 = require("../movies/movies.model");
const movie_person_model_1 = require("./movie-person.model");
let Person = class Person extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Person.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Person.prototype, "avatar", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Person.prototype, "full_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], Person.prototype, "full_name_EN", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, unique: false, allowNull: false }),
    __metadata("design:type", String)
], Person.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, unique: false, allowNull: true }),
    __metadata("design:type", String)
], Person.prototype, "description_EN", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Person.prototype, "DOB", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => movies_model_1.Movie, () => movie_person_model_1.MoviePerson),
    __metadata("design:type", Array)
], Person.prototype, "movies", void 0);
Person = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "person" })
], Person);
exports.Person = Person;
//# sourceMappingURL=person.model.js.map