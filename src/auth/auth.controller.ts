import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { ApiTags } from "@nestjs/swagger";
import { loginUserDto } from "src/users/dto/login-user.dto";
import { createUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";

import { VkAuthGuard } from "./utils/guards/Vk-auth.guard";
import { GoogleAuthGuard } from "./utils/guards/Google-auth.guard";

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
  constructor(private authServise: AuthService) {}

  @Post("/login")
  login(@Body() userDto: loginUserDto) {
    return this.authServise.login(userDto);
  }

  @Post("/registration")
  registration(@Body() userDto: createUserDto) {
    return this.authServise.registration(userDto);
  }

  @Get("google/login")
  @UseGuards(GoogleAuthGuard)
  googleLogin() {
    return { msg: "google ok" };
  }

  @Get("google/redirect")
  @UseGuards(GoogleAuthGuard)
  googleRedirect(@Req() request: Request) {
    return request.user;
  }
  @Get("vkontakte")
  @UseGuards(VkAuthGuard)
  async vkontakteLogin() {
    return { msg: "vk" };
  }

  @Get("vkontakte/callback")
  @UseGuards(VkAuthGuard)
  async vkontakteCallback(@Req() request: Request) {
    return request.user;
  }
}
