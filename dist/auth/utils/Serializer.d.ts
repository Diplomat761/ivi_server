import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/users/users.model";
import { UsersService } from "src/users/users.service";
export declare class SessionSerializer extends PassportSerializer {
    private readonly userService;
    constructor(userService: UsersService);
    serializeUser(user: User, done: Function): void;
    deserializeUser(payload: any, done: Function): Promise<any>;
}
