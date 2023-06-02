import { Model } from "sequelize-typescript";
import { Country } from "src/country/country.model";
import { Genre } from "src/genre/genre.model";
import { Person } from "src/person/person.model";
import { Posts } from "src/posts/posts.model";
export declare class Movie extends Model<Movie> {
    id: number;
    avatars: string;
    promo: string;
    name: string;
    original_name: string;
    rating: number;
    count_rating: number;
    ageLimit: number;
    years: string;
    durations: string;
    country_id: number;
    country: Country;
    genre_id: number;
    genre: Genre;
    description: string;
    description_EN: string;
    actors: Person[];
    director_id: number;
    director: Person;
    posts: Posts[];
}
