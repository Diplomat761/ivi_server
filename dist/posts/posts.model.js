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
exports.Posts = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const groups_model_1 = require("../groups/groups.model");
const post_groups_model_1 = require("../groups/post-groups.model");
const images_model_1 = require("../images/images.model");
const movies_model_1 = require("../movies/movies.model");
const users_model_1 = require("../users/users.model");
const comment_model_1 = require("../comment/comment.model");
let Posts = class Posts extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Уникальный id" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Posts.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "main-hero-text",
        description: "Уникальное название для поиска",
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, unique: true, allowNull: true }),
    __metadata("design:type", String)
], Posts.prototype, "uniqueName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Привет мир!", description: "Заголовок" }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Это мой первый пост!",
        description: "Текстовый блок",
    }),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Posts.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1", description: "Автор поста" }),
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.User),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Posts.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], Posts.prototype, "author", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movies_model_1.Movie),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Posts.prototype, "movieId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movies_model_1.Movie),
    __metadata("design:type", movies_model_1.Movie)
], Posts.prototype, "movies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2", description: "Картинка поста" }),
    (0, sequelize_typescript_1.ForeignKey)(() => images_model_1.Image),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: true }),
    __metadata("design:type", Number)
], Posts.prototype, "imageId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => images_model_1.Image),
    __metadata("design:type", images_model_1.Image)
], Posts.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => groups_model_1.Group, () => post_groups_model_1.PostGroups),
    __metadata("design:type", Array)
], Posts.prototype, "groups", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => comment_model_1.Comment),
    __metadata("design:type", Array)
], Posts.prototype, "comments", void 0);
Posts = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "posts" })
], Posts);
exports.Posts = Posts;
//# sourceMappingURL=posts.model.js.map