import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Movie } from "./movies.model";

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie) private movieRepository: typeof Movie) {}

  async getAllMovies() {
    const movies = await this.movieRepository.findAll();
    return movies;
  }
}
