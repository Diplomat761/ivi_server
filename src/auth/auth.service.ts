import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { createUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import * as bcrypt from "bcryptjs";
import { User } from "src/users/users.model";
import { ProfilesService } from "src/profiles/profiles.service";
import { loginUserDto } from "src/users/dto/login-user.dto";

import { InjectModel } from "@nestjs/sequelize";
import { GoogleUser } from "src/users/google-users.model";
import { Repository } from "sequelize-typescript";
import { GoogleUserDto } from "src/users/dto/google-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtServise: JwtService,
    private profileService: ProfilesService,
    @InjectModel(GoogleUser)
    private readonly googleUserRepository: Repository<GoogleUser>
  ) {}
  // Входим в аккаунт
  async login(userDto: loginUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }
  // Регестрируем пользователя
  async registration(userDto: createUserDto) {
    // Получаем пользователя
    const candidate = await this.userService.getUserByEmail(userDto.email);
    // Если пользователь уже существует, то выбрасываем исключение с сообщением об ошибке
    if (candidate) {
      throw new HttpException(
        "Такой пользователь уже существует",
        HttpStatus.BAD_REQUEST
      );
    }
    // Хэшируем пароль и сохраняем
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    // Создаем нового пользователя,
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    // Создаем профиль пользователя,
    const profile = await this.profileService.createProfile({
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      age: userDto.age,
      phoneNumber: userDto.phoneNumber,
      userId: user.dataValues.id,
    });
    // Возвращаем токен
    return this.generateToken(user);
  }
  // Генерируем токен
  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtServise.sign(payload),
    };
  }
  // Проверка пользователя по email и паролю
  private async validateUser(userDto: loginUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);

    if (!user) {
      throw new HttpException(
        "Некорректный email или пароль",
        HttpStatus.UNAUTHORIZED
      );
    }

    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password
    );

    if (!passwordEquals) {
      throw new HttpException(
        "Некорректный email или пароль",
        HttpStatus.UNAUTHORIZED
      );
    }

    return user;
  }

  // Генерируем токен
  private async generateGoogleToken(user: GoogleUser) {
    const payload = {
      email: user.email,
      id: user.id,
      displayName: user.displayName,
    };
    return {
      token: this.jwtServise.sign(payload),
    };
  }

  async validateGoogleUser(googleUserDto: GoogleUserDto) {
    const user = await this.googleUserRepository.findOne({
      where: { email: googleUserDto.email },
    });

    if (user) return user;
    const newUser = await this.googleUserRepository.create(googleUserDto);
    return newUser;
  }
}
