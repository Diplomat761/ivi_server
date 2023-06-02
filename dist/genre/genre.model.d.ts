import { Model } from "sequelize-typescript";
import { Movie } from "src/movies/movies.model";
export declare class Genre extends Model<Genre> {
    id: number;
    value: string;
    value_EN: string;
    movies: Movie[];
}
