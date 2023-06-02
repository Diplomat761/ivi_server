import { createProfileDto } from "./dto/create-profile.dto";
import { Profile } from "./profiles.model";
export declare class ProfilesService {
    private profileRepository;
    constructor(profileRepository: typeof Profile);
    createProfile(dto: createProfileDto): Promise<Profile>;
    getAllProfiles(): Promise<Profile[]>;
    getProfileById(id: number): Promise<Profile>;
    updateProfile(id: number, dto: createProfileDto): Promise<[affectedCount: number, affectedRows: Profile[]]>;
    deleteProfile(id: number): Promise<Profile>;
}
