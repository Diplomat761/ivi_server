import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { Roles } from "src/auth/utils/roles-auth.decorator";
import { RolesGuard } from "src/auth/utils/roles.guard";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { GenreService } from "./genre.service";

@Controller("genre")
export class GenreController {
  constructor(private genreService: GenreService) {}
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("/data")
  createGenre(@Body() genreDataList: any[]) {
    return this.genreService.createGenre(genreDataList);
  }
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateGenreDto) {
    return this.genreService.create(dto);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.genreService.getAll();
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get(":id")
  getOne(@Param("id") id: number) {
    return this.genreService.getById(id);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Put(":id")
  update(@Param("id") id: number, @Body() dto: UpdateGenreDto) {
    return this.genreService.update(id, dto);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.genreService.delete(id);
  }
}
