import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { Roles } from "src/auth/utils/roles-auth.decorator";
import { RolesGuard } from "src/auth/utils/guards/roles.guard";

import { CountryService } from "./country.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";

@Controller("country")
export class CountryController {
  constructor(private countryService: CountryService) {}
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("/data")
  createManyCountry(@Body() countryDataList: any[]) {
    return this.countryService.createManyCountry(countryDataList);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateCountryDto) {
    return this.countryService.create(dto);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.countryService.getAll();
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get(":id")
  getOne(@Param("id") id: number) {
    return this.countryService.getById(id);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Put(":id")
  update(@Param("id") id: number, @Body() dto: UpdateCountryDto) {
    return this.countryService.update(id, dto);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.countryService.delete(id);
  }
}
