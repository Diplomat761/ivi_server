import { RolesService } from "src/roles/roles.service";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { createUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
export declare class UsersService {
    private userRepository;
    private roleServise;
    constructor(userRepository: typeof User, roleServise: RolesService);
    createUser(dto: createUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}
