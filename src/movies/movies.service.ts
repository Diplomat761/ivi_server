import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Movie } from "./movies.model";
import { Op } from "sequelize";
import { MoviePerson } from "src/person/movie-person.model";
import { Person } from "src/person/person.model";

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie) private movieRepository: typeof Movie) {}

  async getAllMovies() {
    const movies = await this.movieRepository.findAll();
    return movies;
  }

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
  // БАНЕР ---------------------------------------
  async getPromoMovie() {
    const movies = await this.movieRepository.findAll({
      where: { years: "2023" },
      limit: 5,
      attributes: ["id", "name", "original_name", "text", "avatars"],
    });
    return movies;
  }
  // ЛУЧШЕЕ --------------------------------------
  async getRecMovie() {
    const movies = await this.movieRepository.findAll({
      where: { country: "США", rating: { [Op.gt]: 8 } },
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
  // ЖАНРЫ --------------------------------------
  async getDrama() {
    const data = await this.movieRepository.findAll({
      where: { genre: "драма" },
    });
    return data;
  }
  async getСomedy() {
    const data = await this.movieRepository.findAll({
      where: { genre: "комедия" },
    });
    return data;
  }
  async getAction() {
    const data = await this.movieRepository.findAll({
      where: { genre: "" },
    });
    return data;
  }
  async getThriller() {
    const data = await this.movieRepository.findAll({
      where: { genre: "триллер" },
    });
    return data;
  }
  async getAdventures() {
    const data = await this.movieRepository.findAll({
      where: { genre: "приключения" },
    });
    return data;
  }
  async getForeign() {
    const data = await this.movieRepository.findAll({
      where: { genre: "" },
    });
    return data;
  }
  async getMelodramas() {
    const data = await this.movieRepository.findAll({
      where: { genre: "мелодрама" },
    });
    return data;
  }
  async getFantastic() {
    const data = await this.movieRepository.findAll({
      where: { genre: "фантастика" },
    });
    return data;
  }
  async getFantasy() {
    const data = await this.movieRepository.findAll({
      where: { genre: "фэнтези" },
    });
    return data;
  }
  async getFamily() {
    const data = await this.movieRepository.findAll({
      where: { genre: "семейный" },
    });
    return data;
  }
  async getDetective() {
    const data = await this.movieRepository.findAll({
      where: { genre: "детектив" },
    });
    return data;
  }
  async getHorror() {
    const data = await this.movieRepository.findAll({
      where: { genre: "ужасы" },
    });
    return data;
  }
  async getMilitary() {
    const data = await this.movieRepository.findAll({
      where: { genre: "военный" },
    });
    return data;
  }
  async getCrime() {
    const data = await this.movieRepository.findAll({
      where: { genre: "криминал" },
    });
    return data;
  }
  async getWestern() {
    const data = await this.movieRepository.findAll({
      where: { genre: "вестерн" },
    });
    return data;
  }
  async getBiography() {
    const data = await this.movieRepository.findAll({
      where: { genre: "биография" },
    });
    return data;
  }
  async getSport() {
    const data = await this.movieRepository.findAll({
      where: { genre: "спорт" },
    });
    return data;
  }
}
