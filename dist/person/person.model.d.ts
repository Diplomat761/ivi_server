import { Model } from "sequelize-typescript";
import { Movie } from "src/movies/movies.model";
export declare class Person extends Model<Person> {
    id: number;
    avatar: string;
    full_name: string;
    full_name_EN: string;
    description: string;
    description_EN: string;
    DOB: string;
    movies: Movie[];
}
