import { Body, Controller, Post } from "@nestjs/common";
import { GenreService } from "./genre.service";

@Controller("genre")
export class GenreController {
  constructor(private genreService: GenreService) {}
  @Post()
  createMovie(@Body() genreDataList: any[]) {
    return this.genreService.createGenre(genreDataList);
  }
}
