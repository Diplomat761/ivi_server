import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Movie } from "./movies.model";
import { FindOptions, Op, Sequelize } from "sequelize";
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
    rating: number,
    sort: string
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

      const options: FindOptions = {
        where,
        include: [
          {
            model: Person,
            as: "actors",
            through: { attributes: [] },
            attributes: ["id", "name"],
          },
          { model: Person, as: "director", attributes: ["id", "name"] },
          { model: Genre, as: "genre", attributes: ["id", "value"] },
          { model: Country, as: "country", attributes: ["id", "value"] },
        ],
        attributes: [
          "id",
          "avatars",
          "name",
          "original_name",
          "rating",
          "years",
          "durations",
          "text",
        ],
      };

      switch (sort) {
        case "alphabetical":
          options.order = [["original_name", "ASC"]];
          break;
        case "rating-asc":
          options.order = [["rating", "ASC"]];
          break;
        case "rating-desc":
          options.order = [["rating", "DESC"]];
          break;
        case "year-asc":
          options.order = [["years", "ASC"]];
          break;
        case "year-desc":
          options.order = [["years", "DESC"]];
          break;
      }

      return this.movieRepository.findAll(options);
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
  //ЛУЧШЕЕ --------------------------------------
  async getRecMovie() {
    const movies = await this.movieRepository.findAll({
      where: { country_id: 2, rating: { [Op.gt]: 8 } },
      attributes: [
        "id",
        "avatars",
        "name",
        "original_name",
        "rating",
        "years",
        "durations",
      ],
      include: [
        {
          model: Country,
          as: "country",
          attributes: ["id", "value"],
        },
        {
          model: Genre,
          as: "genre",
          attributes: ["id", "value"],
        },
      ],
      limit: 10,
    });
    return movies;
  }

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
      ],
      include: [
        {
          model: Country,
          as: "country",
          attributes: ["id", "value"],
        },
        {
          model: Genre,
          as: "genre",
          attributes: ["id", "value"],
        },
      ],
    });
    return movies;
  }
}
