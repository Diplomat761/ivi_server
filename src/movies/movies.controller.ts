import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { MoviesService } from "./movies.service";

interface IFilter {
  genre: number;
  country: number;
  years: string;
  rating: number;
}

@Controller("movies")
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get("/actor/:id")
  getMovieByActor(@Param("id") id: number) {
    return this.movieService.getMovieByActor(id);
  }

  @Get("/director/:id")
  getMovieByDirector(@Param("id") id: number) {
    return this.movieService.getMovieByDirector(id);
  }

  @Get("/film/:id")
  getById(@Param("id") id: number) {
    return this.movieService.getMoviesById(id);
  }

  @Post()
  createMovie(@Body() movieDataList: any[]) {
    return this.movieService.createMovie(movieDataList);
  }

  @Post("/movpers")
  createMoviePerson(@Body() moviePersonDataList: any[]) {
    return this.movieService.createMoviePerson(moviePersonDataList);
  }

  // ДИНАМИЧЕСКИЙ ПОИСК --------------------------
  @Get()
  async searchMovies(@Query() { genre, country, years, rating }: IFilter) {
    return this.movieService.searchMovies(genre, country, years, rating);
  }
  // БАНЕР ---------------------------------------
  @Get("/promo")
  getСarousel() {
    return this.movieService.getPromoMovie();
  }
  // ЛУЧШЕЕ --------------------------------------
  @Get("/weeklyTop")
  getRec() {
    return this.movieService.getRecMovie();
  }

  @Get("/collection/favorite")
  getFavorite() {
    return this.movieService.getFavoriteMovie();
  }
}
