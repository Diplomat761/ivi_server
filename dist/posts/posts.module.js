"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const posts_controller_1 = require("./posts.controller");
const sequelize_1 = require("@nestjs/sequelize");
const posts_model_1 = require("./posts.model");
const users_model_1 = require("../users/users.model");
const files_module_1 = require("../files/files.module");
const groups_module_1 = require("../groups/groups.module");
const groups_model_1 = require("../groups/groups.model");
const post_groups_model_1 = require("../groups/post-groups.model");
const images_model_1 = require("../images/images.model");
const auth_module_1 = require("../auth/auth.module");
const images_module_1 = require("../images/images.module");
const images_service_1 = require("../images/images.service");
const comment_model_1 = require("../comment/comment.model");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    (0, common_1.Module)({
        providers: [posts_service_1.PostsService, images_service_1.ImagesService],
        controllers: [posts_controller_1.PostsController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                users_model_1.User,
                posts_model_1.Posts,
                groups_model_1.Group,
                post_groups_model_1.PostGroups,
                images_model_1.Image,
                comment_model_1.Comment,
            ]),
            files_module_1.FilesModule,
            groups_module_1.GroupsModule,
            images_module_1.ImagesModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map