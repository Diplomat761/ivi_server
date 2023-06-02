"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const users_service_1 = require("../../users/users.service");
const auth_service_1 = require("../auth.service");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy) {
    constructor(authService, userService) {
        super({
            clientID: process.env.CLIENT_ID_GOOGLE,
            clientSecret: process.env.CLIENT_SECRET_GOOGLE,
            callbackURL: process.env.CALLBACK_URL_GOOGLE,
            scope: ["profile", "email"],
        });
        this.authService = authService;
        this.userService = userService;
    }
    async validate(accessToken, refreshToken, profile) {
        console.log(profile);
        if (!profile.emails[0].value || profile.emails[0].value.trim() === "") {
            throw new Error("Invalid email");
        }
        const user = await this.userService.getUserByEmail(profile.emails[0].value);
        if (user) {
            return this.authService.generateToken(user);
        }
        else {
            throw new common_1.HttpException("Пользователь не найден", common_1.HttpStatus.NOT_FOUND);
        }
    }
};
GoogleStrategy = __decorate([
    __param(0, (0, common_1.Inject)("AUTH_SERVICE")),
    __param(1, (0, common_1.Inject)("USER_SERVICE")),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;
//# sourceMappingURL=GoogleStrategy.js.map