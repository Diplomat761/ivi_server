import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { SequelizeModule } from "@nestjs/sequelize";
import { Profile } from "src/profiles/profiles.model";
import { ProfilesModule } from "src/profiles/profiles.module";
import { ProfilesService } from "src/profiles/profiles.service";
import { Role } from "src/roles/roles.model";
import { RolesService } from "src/roles/roles.service";
import { User } from "src/users/users.model";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { GoogleStrategy } from "./utils/GoogleStrategy";
import { SessionSerializer } from "./utils/Serializer";
import { VkontakteStrategy } from "./utils/VkStrategy";

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    ProfilesService,
    GoogleStrategy,
    SessionSerializer,
    RolesService,
    VkontakteStrategy,
    UsersService,
    {
      provide: "AUTH_SERVICE",
      useClass: AuthService,
    },
    {
      provide: "USER_SERVICE",
      useClass: UsersService,
    },
  ],
  imports: [
    SequelizeModule.forFeature([Profile, User, Role]),
    forwardRef(() => UsersModule),
    ProfilesModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || "SECRET",
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
