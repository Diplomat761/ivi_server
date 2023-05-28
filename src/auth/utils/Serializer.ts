/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/users/users.model";
import { UsersService } from "src/users/users.service";
import { AuthService } from "../auth.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject("USER_SERVICE") private readonly userService: UsersService,
    @Inject("AUTH_SERVICE") private readonly authService: AuthService
  ) {
    super();
  }

  serializeUser(user: User, done: Function) {
    console.log("Serializer User");
    done(null, user);
    return this.authService.generateToken(user);
  }

  async deserializeUser(payload: any, done: Function) {
    const user = await this.userService.getUserByEmail(payload.email);
    console.log("Deserialize User");
    console.log(user);
    return user ? done(null, user) : done(null, null);
  }
}
