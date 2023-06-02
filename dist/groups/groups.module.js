"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsModule = void 0;
const common_1 = require("@nestjs/common");
const groups_service_1 = require("./groups.service");
const groups_controller_1 = require("./groups.controller");
const sequelize_1 = require("@nestjs/sequelize");
const groups_model_1 = require("./groups.model");
const posts_model_1 = require("../posts/posts.model");
const post_groups_model_1 = require("./post-groups.model");
let GroupsModule = class GroupsModule {
};
GroupsModule = __decorate([
    (0, common_1.Module)({
        providers: [groups_service_1.GroupsService],
        controllers: [groups_controller_1.GroupsController],
        imports: [sequelize_1.SequelizeModule.forFeature([groups_model_1.Group, posts_model_1.Posts, post_groups_model_1.PostGroups])],
        exports: [groups_service_1.GroupsService],
    })
], GroupsModule);
exports.GroupsModule = GroupsModule;
//# sourceMappingURL=groups.module.js.map