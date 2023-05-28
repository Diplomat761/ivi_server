import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { UsersService } from "src/users/users.service";
import { AuthService } from "../auth.service";

export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject("AUTH_SERVICE") private readonly authService: AuthService,
    @Inject("USER_SERVICE") private readonly userService: UsersService
  ) {
    super({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      scope: ["profile", "email"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    if (!profile.emails[0].value || profile.emails[0].value.trim() === "") {
      throw new Error("Invalid email");
    }
    const user = await this.userService.getUserByEmail(profile.emails[0].value);

    if (user) {
      return this.authService.generateToken(user);
    } else {
      throw new HttpException("Пользователь не найден", HttpStatus.NOT_FOUND);
    }
  }
}
