/// <reference types="passport" />
import { Request } from "express";
import { loginUserDto } from "src/users/dto/login-user.dto";
import { createUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private authServise;
    constructor(authServise: AuthService);
    login(userDto: loginUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: createUserDto): Promise<{
        token: string;
    }>;
    googleLogin(): {
        msg: string;
    };
    googleRedirect(request: Request): Express.User;
    vkontakteLogin(): Promise<{
        msg: string;
    }>;
    vkontakteCallback(request: Request): Promise<Express.User>;
}
