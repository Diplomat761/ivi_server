import { Body, Controller, Post } from "@nestjs/common";

import { CountryService } from "./country.service";

@Controller("country")
export class CountryController {
  constructor(private countryService: CountryService) {}
  @Post()
  createCountry(@Body() countryDataList: any[]) {
    return this.countryService.createCountry(countryDataList);
  }
}
