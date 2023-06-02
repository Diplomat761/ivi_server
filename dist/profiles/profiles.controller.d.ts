import { createProfileDto } from "./dto/create-profile.dto";
import { ProfilesService } from "./profiles.service";
export declare class ProfilesController {
    private profileService;
    constructor(profileService: ProfilesService);
    create(dto: createProfileDto): Promise<import("./profiles.model").Profile>;
    getAll(): Promise<import("./profiles.model").Profile[]>;
    getOnePost(id: number): Promise<import("./profiles.model").Profile>;
    updateProfile(id: number, dto: createProfileDto): Promise<[affectedCount: number, affectedRows: import("./profiles.model").Profile[]]>;
    deletePost(id: number): Promise<import("./profiles.model").Profile>;
}
