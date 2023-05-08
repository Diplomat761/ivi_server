import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { createMovieDto } from "./dto/create-movie.dto";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  constructor(private movieService: MoviesService) {}
  @Get()
  getAll() {
    return this.movieService.getAllMovies();
  }

  @Get("/film/:id")
  getById(@Param("id") id: number) {
    return this.movieService.getMoviesById(id);
  }

  @Post()
  createMovie(@Body() movieDataList: any[]) {
    return this.movieService.createMovie(movieDataList);
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
