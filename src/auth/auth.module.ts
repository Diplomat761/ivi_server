import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
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

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    ProfilesService,
    GoogleStrategy,
    SessionSerializer,
    RolesService,
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
