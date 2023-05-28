import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Movie } from "src/movies/movies.model";
import { Person } from "./person.model";

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person) private personRepository: typeof Person) {}

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
            "description",
            "description_EN",
            "ageLimit",
            "count_rating",
          ],
        },
      ],
    });
    return person;
  }
}
