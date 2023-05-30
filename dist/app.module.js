"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users/users.model");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const roles_model_1 = require("./roles/roles.model");
const user_roles_model_1 = require("./roles/user-roles.model");
const auth_module_1 = require("./auth/auth.module");
const posts_module_1 = require("./posts/posts.module");
const posts_model_1 = require("./posts/posts.model");
const files_module_1 = require("./files/files.module");
const serve_static_1 = require("@nestjs/serve-static");
const profiles_module_1 = require("./profiles/profiles.module");
const path = require("path");
const profiles_model_1 = require("./profiles/profiles.model");
const groups_module_1 = require("./groups/groups.module");
const groups_model_1 = require("./groups/groups.model");
const post_groups_model_1 = require("./groups/post-groups.model");
const images_module_1 = require("./images/images.module");
const images_model_1 = require("./images/images.model");
const movies_model_1 = require("./movies/movies.model");
const movies_module_1 = require("./movies/movies.module");
const person_module_1 = require("./person/person.module");
const person_model_1 = require("./person/person.model");
const movie_person_model_1 = require("./person/movie-person.model");
const genre_module_1 = require("./genre/genre.module");
const country_module_1 = require("./country/country.module");
const country_model_1 = require("./country/country.model");
const genre_model_1 = require("./genre/genre.model");
const comment_module_1 = require("./comment/comment.module");
const comment_model_1 = require("./comment/comment.model");
const passport_1 = require("@nestjs/passport");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            passport_1.PassportModule.register({ session: true }),
            config_1.ConfigModule.forRoot({
                envFilePath: ".env",
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, "static"),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [
                    users_model_1.User,
                    roles_model_1.Role,
                    user_roles_model_1.UserRoles,
                    posts_model_1.Posts,
                    profiles_model_1.Profile,
                    groups_model_1.Group,
                    post_groups_model_1.PostGroups,
                    images_model_1.Image,
                    movies_model_1.Movie,
                    person_model_1.Person,
                    movie_person_model_1.MoviePerson,
                    country_model_1.Country,
                    genre_model_1.Genre,
                    comment_model_1.Comment,
                ],
                autoLoadModels: true,
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            posts_module_1.PostsModule,
            files_module_1.FilesModule,
            profiles_module_1.ProfilesModule,
            groups_module_1.GroupsModule,
            images_module_1.ImagesModule,
            movies_module_1.MoviesModule,
            person_module_1.PersonModule,
            genre_module_1.GenreModule,
            country_module_1.CountryModule,
            comment_module_1.CommentModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map