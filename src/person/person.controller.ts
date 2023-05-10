import { Body, Controller, Post } from "@nestjs/common";
import { PersonService } from "./person.service";

@Controller("person")
export class PersonController {
  constructor(private personService: PersonService) {}

  @Post()
  createMovie(@Body() personDataList: any[]) {
    return this.personService.createPerson(personDataList);
  }
}
