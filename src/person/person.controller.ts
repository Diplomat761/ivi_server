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
  getMoviesByIdPerson(@Param("id") id: number) {
    return this.personService.getById(id);
  }

  @Get("/director/:id")
  getByDirector(@Param("id") id: number) {
    return this.personService.getByDirector(id);
  }

  @Get("/actor/:id")
  getByActor(@Param("id") id: number) {
    return this.personService.getByActor(id);
  }
}
