import { Inject } from "@nestjs/common";
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
      clientID:
        "244500741704-d7jrbu2cg48gla1g8c0mi4bnebdl7o90.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/redirect",
      scope: ["profile", "email"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const user = await this.userService.getUserByEmail(profile.emails[0].value);

    return this.authService.generateToken(user);
  }
}
