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
exports.PostGroups = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const posts_model_1 = require("../posts/posts.model");
const groups_model_1 = require("./groups.model");
let PostGroups = class PostGroups extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], PostGroups.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => groups_model_1.Group),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostGroups.prototype, "groupId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => posts_model_1.Posts),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], PostGroups.prototype, "postId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => posts_model_1.Posts),
    __metadata("design:type", Array)
], PostGroups.prototype, "posts", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => groups_model_1.Group),
    __metadata("design:type", Array)
], PostGroups.prototype, "groups", void 0);
PostGroups = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "post_groups", createdAt: false, updatedAt: false })
], PostGroups);
exports.PostGroups = PostGroups;
//# sourceMappingURL=post-groups.model.js.map