import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Country } from "src/country/country.model";
import { Genre } from "src/genre/genre.model";
import { Movie } from "src/movies/movies.model";
import { Person } from "./person.model";

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person) private personRepository: typeof Person,
    @InjectModel(Movie) private movieRepository: typeof Movie
  ) {}

  async createPerson(personDataList: any[]): Promise<Person[]> {
    const persons = [];
    for (const movieData of personDataList) {
      const person = new Person(movieData);
      await person.save();
      persons.push(person);
    }
    return persons;
  }

  async getAll() {
    const persons = await this.personRepository.findAll();
    return persons;
  }

  async getById(id: number) {
    const person = await this.personRepository.findOne({
      where: { id },
      attributes: [
        "id",
        "avatar",
        "full_name",
        "full_name_EN",
        "description",
        "description_EN",
        "DOB",
      ],
      include: [
        {
          model: Movie,
          as: "movies",
          through: { attributes: [] },
          attributes: [
            "id",
            "avatars",
            "name",
            "original_name",
            "rating",
            "years",
            "durations",
          ],
          include: [
            {
              model: Country,
              as: "country",
              attributes: ["id", "value", "value_EN"],
            },
            {
              model: Genre,
              as: "genre",
              attributes: ["id", "value", "value_EN"],
            },
          ],
        },
      ],
    });
    const movies = await this.movieRepository.findAll({
      where: { director_id: id },

      attributes: [
        "id",
        "avatars",
        "name",
        "original_name",
        "rating",
        "years",
        "durations",
      ],
      include: [
        {
          model: Country,
          as: "country",
          attributes: ["id", "value", "value_EN"],
        },
        {
          model: Genre,
          as: "genre",
          attributes: ["id", "value", "value_EN"],
        },
      ],
    });
    return { person, movies };
  }

  async getByActor(id: number) {
    const movies = await this.movieRepository.findAll({
      include: [
        {
          model: Person,
          as: "actors",
          where: { id: id },
          through: { attributes: [] },
          attributes: ["id", "avatar", "full_name", "description"],
        },
      ],
    });
    return movies;
  }

  async getByDirector(id: number) {
    const movies = await this.movieRepository.findAll({
      where: { director_id: id },
      include: [
        {
          model: Person,
          as: "director",
          where: { id: id },
        },
      ],
    });
    return movies;
  }
}
