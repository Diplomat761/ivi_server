import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { Genre } from "./genre.model";

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre) private genreRepository: typeof Genre) {}

  async createGenre(genreDataList: any[]): Promise<Genre[]> {
    const genres = [];
    for (const genreData of genreDataList) {
      const genre = new Genre(genreData);
      await genre.save();
      genres.push(genre);
    }
    return genres;
  }

  async create(dto: CreateGenreDto) {
    const created = await this.genreRepository.create(dto);

    throw new HttpException("Жанр добавлен", HttpStatus.OK);
  }

  async getAll() {
    const genre = await this.genreRepository.findAll();
    return genre;
  }

  async getById(id: number) {
    const genre = await this.genreRepository.findOne({
      where: { id },
    });
    return genre;
  }

  async update(id: number, dto: UpdateGenreDto) {
    const [rowsGenre, [updatedGenre]] = await this.genreRepository.update(dto, {
      returning: true,
      where: { id },
    });
    if (rowsGenre === 0 || !updatedGenre) {
      throw new NotFoundException("Такого жанра не существует");
    }
    throw new HttpException("Жанр изменен", HttpStatus.OK);
  }

  async delete(id: number) {
    const genre = await this.genreRepository.findOne({ where: { id } });

    if (!genre) {
      throw new HttpException(
        "Такого жанра не существует",
        HttpStatus.BAD_REQUEST
      );
    }

    await genre.destroy();
    throw new HttpException("Жанр удален", HttpStatus.OK);
  }
}
