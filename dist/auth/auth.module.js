"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const profiles_model_1 = require("../profiles/profiles.model");
const profiles_module_1 = require("../profiles/profiles.module");
const profiles_service_1 = require("../profiles/profiles.service");
const roles_model_1 = require("../roles/roles.model");
const roles_service_1 = require("../roles/roles.service");
const users_model_1 = require("../users/users.model");
const users_module_1 = require("../users/users.module");
const users_service_1 = require("../users/users.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const GoogleStrategy_1 = require("./utils/GoogleStrategy");
const Serializer_1 = require("./utils/Serializer");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            profiles_service_1.ProfilesService,
            GoogleStrategy_1.GoogleStrategy,
            Serializer_1.SessionSerializer,
            roles_service_1.RolesService,
            {
                provide: "AUTH_SERVICE",
                useClass: auth_service_1.AuthService,
            },
            {
                provide: "USER_SERVICE",
                useClass: users_service_1.UsersService,
            },
        ],
        imports: [
            sequelize_1.SequelizeModule.forFeature([profiles_model_1.Profile, users_model_1.User, roles_model_1.Role]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            profiles_module_1.ProfilesModule,
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || "SECRET",
                signOptions: {
                    expiresIn: "24h",
                },
            }),
        ],
        exports: [auth_service_1.AuthService, jwt_1.JwtModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map