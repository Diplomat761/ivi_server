import { CreateGenreDto } from "./dto/create-genre.dto";
import { UpdateGenreDto } from "./dto/update-genre.dto";
import { GenreService } from "./genre.service";
export declare class GenreController {
    private genreService;
    constructor(genreService: GenreService);
    createGenre(genreDataList: any[]): Promise<import("./genre.model").Genre[]>;
    create(dto: CreateGenreDto): Promise<void>;
    getAll(): Promise<import("./genre.model").Genre[]>;
    getOne(id: number): Promise<import("./genre.model").Genre>;
    update(id: number, dto: UpdateGenreDto): Promise<void>;
    delete(id: number): Promise<void>;
}
