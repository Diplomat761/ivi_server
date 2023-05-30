import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";
import { createUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
import { UsersService } from "./users.service";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(userDto: createUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    getOneUser(id: number): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}
