import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "src/auth/auth.module";
import { Comment } from "src/comment/comment.model";
import { MoviePerson } from "src/person/movie-person.model";
import { Person } from "src/person/person.model";
import { PersonModule } from "src/person/person.module";

import { MoviesController } from "./movies.controller";
import { Movie } from "./movies.model";
import { MoviesService } from "./movies.service";

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [
    SequelizeModule.forFeature([Movie, Person, MoviePerson, Comment]),
    forwardRef(() => AuthModule),
    PersonModule,
  ],
})
export class MoviesModule {}
