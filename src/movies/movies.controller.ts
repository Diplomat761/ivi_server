import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { MoviesService } from "./movies.service";

interface IFilter {
  genre: number;
  country: number;
  years: string;
  rating: number;
  sort: string;
} //

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
  async searchMovies(
    @Query() { genre, country, years, rating, sort }: IFilter
  ) {
    const genreIds = genre ? genre.toString().split(",").map(Number) : [];
    const countryIds = country ? country.toString().split(",").map(Number) : [];

    return this.movieService.searchMovies(
      genreIds,
      countryIds,
      years,
      rating,
      sort
    );
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
