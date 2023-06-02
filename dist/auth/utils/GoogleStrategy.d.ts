import { Profile, Strategy } from "passport-google-oauth20";
import { UsersService } from "src/users/users.service";
import { AuthService } from "../auth.service";
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    validate(accessToken: string, refreshToken: string, profile: Profile): Promise<{
        token: string;
    }>;
}
export {};
