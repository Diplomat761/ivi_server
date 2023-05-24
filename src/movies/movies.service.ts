import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Movie } from "./movies.model";
import { FindOptions, Op, Sequelize } from "sequelize";
import { MoviePerson } from "src/person/movie-person.model";
import { Person } from "src/person/person.model";
import { Genre } from "src/genre/genre.model";
import { Country } from "src/country/country.model";
import { Posts } from "src/posts/posts.model";
import { User } from "src/users/users.model";
import { Profile } from "src/profiles/profiles.model";

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
          attributes: ["id", "avatar", "full_name", "description"],
        },
      ],
    });
    return movies;
  }

  async getMovieByDirector(id: number) {
    const movies = await this.movieRepository.findAll({
      where: { director_id: id },
      include: [
        {
          model: Person,
          as: "director",
          where: { id: id },
        },
      ],
    });
    return movies;
  }

  async getMoviesById(id: number) {
    const movie = await this.movieRepository.findOne({
      where: { id },
      include: [
        {
          model: Person,
          as: "actors",
          through: { attributes: [] },
          attributes: [
            "id",
            "avatar",
            "full_name",
            "full_name_EN",
            "description",
            "description_EN",
            "DOB",
          ],
        },
        {
          model: Person,
          as: "director",
          attributes: [
            "id",
            "avatar",
            "full_name",
            "full_name_EN",
            "description",
            "description_EN",
            "DOB",
          ],
        },
        { model: Genre, as: "genre", attributes: ["id", "value", "value_EN"] },
        {
          model: Country,
          as: "country",
          attributes: ["id", "value", "value_EN"],
        },
        {
          model: Posts,
          as: "posts",
          attributes: ["id", "content", "userId"],
          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email"],
              include: [
                {
                  model: Profile,
                  as: "profile",
                  attributes: ["id", "firstName", "lastName"],
                },
              ],
            },
          ],
        },
      ],
      attributes: [
        "id",
        "avatars",
        "name",
        "original_name",
        "rating",
        "years",
        "durations",
        "description",
        "description_EN",
        "ageLimit",
        "count_rating",
      ],
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
    genres: number[],
    countries: number[],
    years: string,
    rating: number,
    sort: string,
    minRatingCount: number,
    maxRatingCount: number,
    page: number
  ): Promise<Movie[]> {
    const where: any = {};

    if (genres.length > 0) {
      where.genre_id = { [Op.in]: genres };
    }

    if (countries.length > 0) {
      where.country_id = { [Op.in]: countries };
    }
    if (years) {
      where.years = years;
    }

    if (rating) {
      where.rating = { [Op.gte]: rating };
    }
    if (minRatingCount && maxRatingCount) {
      where.count_rating = { [Op.between]: [minRatingCount, maxRatingCount] };
    } else if (minRatingCount) {
      where.count_rating = { [Op.gte]: minRatingCount };
    } else if (maxRatingCount) {
      where.count_rating = { [Op.lte]: maxRatingCount };
    }
    const limit = 35; // Количество фильмов на странице
    const offset = (page - 1) * limit; // Смещение

    const options: FindOptions = {
      limit,
      offset,
      where,
      include: [
        {
          model: Person,
          as: "actors",
          through: { attributes: [] },
          attributes: [
            "id",
            "avatar",
            "full_name",
            "full_name_EN",
            "description",
            "description_EN",
            "DOB",
          ],
        },
        {
          model: Person,
          as: "director",
          attributes: [
            "id",
            "avatar",
            "full_name",
            "full_name_EN",
            "description",
            "description_EN",
            "DOB",
          ],
        },
        { model: Genre, as: "genre", attributes: ["id", "value", "value_EN"] },
        {
          model: Country,
          as: "country",
          attributes: ["id", "value", "value_EN"],
        },
      ],
      attributes: [
        "id",
        "avatars",
        "name",
        "original_name",
        "rating",
        "years",
        "durations",
        "description",
        "description_EN",
        "ageLimit",
        "count_rating",
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
  }
  // БАНЕР ---------------------------------------
  async getPromoMovie() {
    const movies = await this.movieRepository.findAll({
      where: { years: "2023" },
      limit: 5,
      attributes: [
        "id",
        "name",
        "original_name",
        "description",
        "description_EN",
        "promo",
      ],
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
          attributes: ["id", "value", "value_EN"],
        },
        {
          model: Genre,
          as: "genre",
          attributes: ["id", "value", "value_EN"],
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
          attributes: ["id", "value", "value_EN"],
        },
        {
          model: Genre,
          as: "genre",
          attributes: ["id", "value", "value_EN"],
        },
      ],
    });
    return movies;
  }
}
