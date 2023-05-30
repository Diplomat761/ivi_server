import { PersonService } from "./person.service";
export declare class PersonController {
    private personService;
    constructor(personService: PersonService);
    createMovie(personDataList: any[]): Promise<import("./person.model").Person[]>;
    getAllPerson(): Promise<import("./person.model").Person[]>;
    getMoviesByIdPerson(id: number): Promise<{
        person: import("./person.model").Person;
        movies: import("../movies/movies.model").Movie[];
    }>;
    getByDirector(id: number): Promise<import("../movies/movies.model").Movie[]>;
    getByActor(id: number): Promise<import("../movies/movies.model").Movie[]>;
}
