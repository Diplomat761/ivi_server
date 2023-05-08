import { Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";

export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject("AUTH_SERVICE") private readonly authService: AuthService
  ) {
    super({
      clientID:
        "244500741704-d7jrbu2cg48gla1g8c0mi4bnebdl7o90.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:4000/auth/google/redirect",
      scope: ["profile", "email"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);

    const user = await this.authService.validateGoogleUser({
      email: profile.emails[0].value,
      displayName: profile.displayName,
    });
  }
}
