import { Body, Controller, Get, Post } from "@nestjs/common";
import { PersonService } from "./person.service";

@Controller("person")
export class PersonController {
  constructor(private personService: PersonService) {}

  @Post()
  createMovie(@Body() personDataList: any[]) {
    return this.personService.createPerson(personDataList);
  }

  @Get()
  getAllPerson() {
    return this.personService.getAll();
  }
}
