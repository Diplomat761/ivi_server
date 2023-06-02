import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { Genre } from "./genre.model";
export declare class GenreService {
    private genreRepository;
    constructor(genreRepository: typeof Genre);
    createGenre(genreDataList: any[]): Promise<Genre[]>;
    create(dto: CreateGenreDto): Promise<void>;
    getAll(): Promise<Genre[]>;
    getById(id: number): Promise<Genre>;
    update(id: number, dto: UpdateGenreDto): Promise<void>;
    delete(id: number): Promise<void>;
}
