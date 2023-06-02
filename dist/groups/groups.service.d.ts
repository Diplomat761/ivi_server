import { CreateGroupsDto } from "./dto/create-group.dto";
import { CreatePostGroupsDto } from "./dto/createPostGroups.dto";
import { Group } from "./groups.model";
import { PostGroups } from "./post-groups.model";
export declare class GroupsService {
    private groupRepository;
    private postGroupRepository;
    constructor(groupRepository: typeof Group, postGroupRepository: typeof PostGroups);
    create(dto: CreateGroupsDto): Promise<Group>;
    getAllGroups(): Promise<Group[]>;
    getGroupById(id: number): Promise<Group>;
    deleteGroup(id: number): Promise<Group>;
    createPostGroup(dto: CreatePostGroupsDto): Promise<PostGroups>;
    getPostByGroup(groupId: any): Promise<PostGroups[]>;
}
