import { JwtService } from "@nestjs/jwt";
import { createUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { User } from "src/users/users.model";
import { ProfilesService } from "src/profiles/profiles.service";
import { loginUserDto } from "src/users/dto/login-user.dto";
export declare class AuthService {
    private userService;
    private jwtServise;
    private profileService;
    constructor(userService: UsersService, jwtServise: JwtService, profileService: ProfilesService);
    login(userDto: loginUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: createUserDto): Promise<{
        token: string;
    }>;
    generateToken(user: User): Promise<{
        token: string;
    }>;
    private validateUser;
}
