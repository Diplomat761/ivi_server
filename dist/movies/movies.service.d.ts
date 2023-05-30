import { Movie } from "./movies.model";
import { MoviePerson } from "src/person/movie-person.model";
import { PersonService } from "src/person/person.service";
export declare class MoviesService {
    private movieRepository;
    private personService;
    constructor(movieRepository: typeof Movie, personService: PersonService);
    getMovieByActor(id: number): Promise<Movie[]>;
    getMovieByDirector(id: number): Promise<Movie[]>;
    getMoviesById(id: number): Promise<Movie>;
    createMovie(movieDataList: any[]): Promise<Movie[]>;
    createMoviePerson(moviePersonDataList: any[]): Promise<MoviePerson[]>;
    searchMovies(genres: number[], countries: number[], years: string, rating: number, sort: string, minRatingCount: number, maxRatingCount: number, page: number, directorName: string): Promise<Movie[]>;
    getPromoMovie(): Promise<Movie[]>;
    getRecMovie(): Promise<Movie[]>;
    getFavoriteMovie(): Promise<Movie[]>;
}
