import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  constructor(private movieService: MoviesService) {}

  @Get()
  getAll() {
    return this.movieService.getAllMovies();
  }

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

  @Post("")
  createMovie(@Body() movieDataList: any[]) {
    return this.movieService.createMovie(movieDataList);
  }

  @Post("/movpers")
  createMoviePerson(@Body() moviePersonDataList: any[]) {
    return this.movieService.createMoviePerson(moviePersonDataList);
  }

  @Get("/carousel")
  getСarousel() {
    return this.movieService.getСarouselMovie();
  }

  @Get("/rec")
  getRec() {
    return this.movieService.getRecMovie();
  }

  @Get("/favorite")
  getFavorite() {
    return this.movieService.getFavoriteMovie();
  }
}
