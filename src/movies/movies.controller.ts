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

  @Post()
  createMovie(@Body() movieDataList: any[]) {
    return this.movieService.createMovie(movieDataList);
  }

  @Post("/movpers")
  createMoviePerson(@Body() moviePersonDataList: any[]) {
    return this.movieService.createMoviePerson(moviePersonDataList);
  }
  // БАНЕР ---------------------------------------
  @Get("/promo")
  getСarousel() {
    return this.movieService.getPromoMovie();
  }
  // ЛУЧШЕЕ --------------------------------------
  @Get("/collection/rec")
  getRec() {
    return this.movieService.getRecMovie();
  }

  @Get("/collection/favorite")
  getFavorite() {
    return this.movieService.getFavoriteMovie();
  }
  // ЖАНРЫ --------------------------------------
  @Get("/collection/genre/drama")
  getDrama() {
    return this.movieService.getDrama();
  }

  @Get("/collection/genre/comedy")
  getСomedy() {
    return this.movieService.getСomedy();
  }

  @Get("/collection/genre/action")
  getAction() {
    return this.movieService.getAction();
  }

  @Get("/collection/genre/thriller")
  getThriller() {
    return this.movieService.getThriller();
  }

  @Get("/collection/genre/adventures")
  getAdventures() {
    return this.movieService.getAdventures();
  }

  @Get("/collection/genre/foreign")
  getForeign() {
    return this.movieService.getForeign();
  }

  @Get("/collection/genre/melodramas")
  getMelodramas() {
    return this.movieService.getMelodramas();
  }

  @Get("/collection/genre/fantastic")
  getFantastic() {
    return this.movieService.getFantastic();
  }

  @Get("/collection/genre/fantasy")
  getFantasy() {
    return this.movieService.getFantasy();
  }

  @Get("/collection/genre/family")
  getFamily() {
    return this.movieService.getFamily();
  }

  @Get("/collection/genre/detective")
  getDetective() {
    return this.movieService.getDetective();
  }

  @Get("/collection/genre/horror")
  getHorror() {
    return this.movieService.getHorror();
  }

  @Get("/collection/genre/military")
  getMilitary() {
    return this.movieService.getMilitary();
  }

  @Get("/collection/genre/crime")
  getCrime() {
    return this.movieService.getCrime();
  }

  @Get("/collection/genre/western")
  getWestern() {
    return this.movieService.getWestern();
  }

  @Get("/collection/genre/biography")
  getBiography() {
    return this.movieService.getBiography();
  }

  @Get("/collection/genre/sport")
  getSport() {
    return this.movieService.getSport();
  }
}
