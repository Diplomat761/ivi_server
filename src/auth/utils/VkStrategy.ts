import { Params, Profile, Strategy, VerifyCallback } from "passport-vkontakte";
import { PassportStrategy } from "@nestjs/passport";
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class VkontakteStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject("AUTH_SERVICE") private readonly authService: AuthService,
    @Inject("USER_SERVICE") private readonly userService: UsersService
  ) {
    super(
      {
        clientID: "51659841",
        clientSecret: "qBHz1edBqtRYNdvkPi69",
        callbackURL: "http://localhost:4000/auth/vkontakte/callback",
        scope: ["profile", "email"],
      },
      async (
        accessToken: string,
        refreshToken: string,
        params: Params,
        profile: Profile,
        done: VerifyCallback
      ) => {
        console.log(profile);

        if (!profile.emails[0].value || profile.emails[0].value.trim() === "") {
          throw new Error("Invalid email");
        }

        const user = await this.userService.getUserByEmail(
          profile.emails[0].value
        );

        if (user) {
          return this.authService.generateToken(user);
        } else {
          throw new HttpException(
            "Пользователь не найден",
            HttpStatus.NOT_FOUND
          );
        }
      }
    );
  }
}
