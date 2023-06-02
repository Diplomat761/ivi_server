import { Strategy } from "passport-vkontakte";
import { AuthService } from "../auth.service";
import { UsersService } from "src/users/users.service";
declare const VkontakteStrategy_base: new (...args: any[]) => Strategy;
export declare class VkontakteStrategy extends VkontakteStrategy_base {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
}
export {};
