import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Movie } from "src/movies/movies.model";
import { MoviePerson } from "./movie-person.model";
import { PersonController } from "./person.controller";
import { Person } from "./person.model";
import { PersonService } from "./person.service";

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  imports: [SequelizeModule.forFeature([Person, Movie, MoviePerson])],
  exports: [PersonService],
})
export class PersonModule {}
