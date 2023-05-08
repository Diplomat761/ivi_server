import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { createMovieDto } from "./dto/create-movie.dto";
import { Movie } from "./movies.model";
import { Op } from "sequelize";

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie) private movieRepository: typeof Movie) {}

  async getAllMovies() {
    const movies = await this.movieRepository.findAll();
    return movies;
  }

  async getMoviesById(id: number) {
    const movie = await this.movieRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return movie;
  }

  async createMovie(movieDataList: any[]): Promise<Movie[]> {
    const movies = [];
    for (const movieData of movieDataList) {
      const movie = new Movie(movieData);
      await movie.save();
      movies.push(movie);
    }
    return movies;
  }

  async getСarouselMovie() {
    const movies = await this.movieRepository.findAll({
      where: { years: "2023" },
      limit: 5,
    });
    return movies;
  }

  async getRecMovie() {
    const movies = await this.movieRepository.findAll({
      where: { country: "США" },
      limit: 10,
    });
    return movies;
  }

  async getFavoriteMovie() {
    const movies = await this.movieRepository.findAll({
      where: { rating: { [Op.gt]: 9 } },
      limit: 10,
    });
    return movies;
  }
}
