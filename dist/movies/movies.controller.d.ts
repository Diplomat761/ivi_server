import { MoviesService } from "./movies.service";
interface IFilter {
    genre: number;
    country: number;
    years: string;
    rating: number;
    sort: string;
    minRatingCount: number;
    maxRatingCount: number;
    page: number;
    directorName: string;
}
export declare class MoviesController {
    private movieService;
    constructor(movieService: MoviesService);
    getMovieByActor(id: number): Promise<import("./movies.model").Movie[]>;
    getMovieByDirector(id: number): Promise<import("./movies.model").Movie[]>;
    getById(id: number): Promise<import("./movies.model").Movie>;
    createMovie(movieDataList: any[]): Promise<import("./movies.model").Movie[]>;
    createMoviePerson(moviePersonDataList: any[]): Promise<import("../person/movie-person.model").MoviePerson[]>;
    searchMovies({ genre, country, years, rating, sort, minRatingCount, maxRatingCount, page, directorName, }: IFilter): Promise<import("./movies.model").Movie[]>;
    getСarousel(): Promise<import("./movies.model").Movie[]>;
    getRec(): Promise<import("./movies.model").Movie[]>;
    getFavorite(): Promise<import("./movies.model").Movie[]>;
}
export {};
