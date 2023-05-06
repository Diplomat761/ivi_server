import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { MoviesController } from "./movies.controller";
import { Movie } from "./movies.model";
import { MoviesService } from "./movies.service";

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [SequelizeModule.forFeature([Movie])],
})
export class MoviesModule {}
