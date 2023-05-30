import { CreateGroupsDto } from "./dto/create-group.dto";
import { GroupsService } from "./groups.service";
export declare class GroupsController {
    private groupService;
    constructor(groupService: GroupsService);
    createGroup(dto: CreateGroupsDto): Promise<import("./groups.model").Group>;
    getAll(): Promise<import("./groups.model").Group[]>;
    getOneGroup(id: number): Promise<import("./groups.model").Group>;
    deleteGroup(id: number): Promise<import("./groups.model").Group>;
}
