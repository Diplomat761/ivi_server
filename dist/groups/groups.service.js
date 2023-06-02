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
exports.GroupsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const groups_model_1 = require("./groups.model");
const post_groups_model_1 = require("./post-groups.model");
let GroupsService = class GroupsService {
    constructor(groupRepository, postGroupRepository) {
        this.groupRepository = groupRepository;
        this.postGroupRepository = postGroupRepository;
    }
    async create(dto) {
        return await this.groupRepository.create(dto);
    }
    async getAllGroups() {
        const groups = await this.groupRepository.findAll({
            include: { all: true },
        });
        return groups;
    }
    async getGroupById(id) {
        const group = await this.groupRepository.findOne({
            where: { id },
            include: { all: true },
        });
        return group;
    }
    async deleteGroup(id) {
        const group = await this.groupRepository.findOne({ where: { id } });
        await group.destroy();
        return group;
    }
    async createPostGroup(dto) {
        return await this.postGroupRepository.create(dto);
    }
    async getPostByGroup(groupId) {
        return this.postGroupRepository.findAll({
            where: { groupId },
            include: { all: true },
        });
    }
};
GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(groups_model_1.Group)),
    __param(1, (0, sequelize_1.InjectModel)(post_groups_model_1.PostGroups)),
    __metadata("design:paramtypes", [Object, Object])
], GroupsService);
exports.GroupsService = GroupsService;
//# sourceMappingURL=groups.service.js.map