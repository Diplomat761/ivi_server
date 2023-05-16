import { Injectable } from "@nestjs/common";
import { Genre } from "./genre.model";

@Injectable()
export class GenreService {
  constructor() {}

  async createGenre(genreDataList: any[]): Promise<Genre[]> {
    const genres = [];
    for (const genreData of genreDataList) {
      const genre = new Genre(genreData);
      await genre.save();
      genres.push(genre);
    }
    return genres;
  }
}
