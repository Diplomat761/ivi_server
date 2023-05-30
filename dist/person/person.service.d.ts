import { Movie } from "src/movies/movies.model";
import { Person } from "./person.model";
export declare class PersonService {
    private personRepository;
    private movieRepository;
    constructor(personRepository: typeof Person, movieRepository: typeof Movie);
    createPerson(personDataList: any[]): Promise<Person[]>;
    getAll(): Promise<Person[]>;
    getById(id: number): Promise<{
        person: Person;
        movies: Movie[];
    }>;
    getByActor(id: number): Promise<Movie[]>;
    getByDirector(id: number): Promise<Movie[]>;
    getMatchingDirectors(query: string): Promise<Person[]>;
}
