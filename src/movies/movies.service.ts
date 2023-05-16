import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Movie } from "./movies.model";
import { Op } from "sequelize";
import { MoviePerson } from "src/person/movie-person.model";
import { Person } from "src/person/person.model";
import { Genre } from "src/genre/genre.model";
import { Country } from "src/country/country.model";

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie) private movieRepository: typeof Movie) {}

  async getMovieByActor(id: number) {
    const movies = await this.movieRepository.findAll({
      include: [
        {
          model: Person,
          as: "actors",
          where: { id: id },
          through: { attributes: [] },
        },
      ],
    });
    return movies;
  }

  async getMovieByDirector(id: number) {
    const movies = await this.movieRepository.findAll({
      where: { director_id: id },
    });
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

  async createMoviePerson(moviePersonDataList: any[]): Promise<MoviePerson[]> {
    const moviePersons = [];
    for (const movieData of moviePersonDataList) {
      const moviePerson = new MoviePerson(movieData);
      await moviePerson.save();
      moviePersons.push(moviePerson);
    }
    return moviePersons;
  }

  // ДИНАМИЧЕСКИЙ ПОИСК --------------------------

  async searchMovies(
    genre: number,
    country: number,
    years: string,
    rating: number
  ): Promise<Movie[]> {
    try {
      const where = {};

      if (genre) {
        where["genre_id"] = { [Op.eq]: genre };
      }

      if (country) {
        where["country_id"] = { [Op.eq]: country };
      }

      if (years) {
        where["years"] = { [Op.eq]: years };
      }

      if (rating) {
        where["rating"] = { [Op.gte]: rating };
      }

      return this.movieRepository.findAll({
        where,
        include: [
          { model: Person, as: "actors", through: { attributes: [] } },
          { model: Person, as: "director" },
          { model: Genre, as: "genre" },
          { model: Country, as: "country" },
        ],
        limit: 15,
      });
    } catch (error) {
      console.error("Ошибка при поиске фильмов:", error);
      throw error;
    }
  }
  // БАНЕР ---------------------------------------
  async getPromoMovie() {
    const movies = await this.movieRepository.findAll({
      where: { years: "2023" },
      limit: 5,
      attributes: ["id", "name", "original_name", "text", "promo"],
    });
    return movies;
  }
  // ЛУЧШЕЕ --------------------------------------
  // async getRecMovie() {
  //   const movies = await this.movieRepository.findAll({
  //     where: { country: "США", rating: { [Op.gt]: 8 } },
  //     attributes: [
  //       "id",
  //       "avatars",
  //       "name",
  //       "original_name",
  //       "rating",
  //       "years",
  //       "durations",
  //       "country",
  //       "genre",
  //     ],
  //     limit: 10,
  //   });
  //   return movies;
  // }

  async getFavoriteMovie() {
    const movies = await this.movieRepository.findAll({
      where: { rating: { [Op.gt]: 9 } },
      limit: 10,
      attributes: [
        "id",
        "avatars",
        "name",
        "original_name",
        "rating",
        "years",
        "durations",
        "country",
        "genre",
      ],
    });
    return movies;
  }
}
