import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

  @Get("/:id")
  getPersonById(@Param("id") id: number) {
    return this.personService.getById(id);
  }
}
