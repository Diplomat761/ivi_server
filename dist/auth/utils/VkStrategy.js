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
exports.VkontakteStrategy = void 0;
const passport_vkontakte_1 = require("passport-vkontakte");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth.service");
const users_service_1 = require("../../users/users.service");
let VkontakteStrategy = class VkontakteStrategy extends (0, passport_1.PassportStrategy)(passport_vkontakte_1.Strategy) {
    constructor(authService, userService) {
        super({
            clientID: "51659841",
            clientSecret: "qBHz1edBqtRYNdvkPi69",
            callbackURL: "http://localhost:4000/auth/vkontakte/callback",
            scope: ["profile", "email"],
        }, async (accessToken, refreshToken, params, profile, done) => {
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
        });
        this.authService = authService;
        this.userService = userService;
    }
};
VkontakteStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("AUTH_SERVICE")),
    __param(1, (0, common_1.Inject)("USER_SERVICE")),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], VkontakteStrategy);
exports.VkontakteStrategy = VkontakteStrategy;
//# sourceMappingURL=VkStrategy.js.map