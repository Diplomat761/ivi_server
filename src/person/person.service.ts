import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
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
}
