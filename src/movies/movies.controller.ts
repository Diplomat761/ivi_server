import { Controller, Get } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
  constructor(private movieService: MoviesService) {}
  @Get()
  getAll() {
    return this.movieService.getAllMovies();
  }
}
