import { Injectable } from "@nestjs/common";
import { Country } from "./country.model";

@Injectable()
export class CountryService {
  constructor() {}

  async createCountry(countryDataList: any[]): Promise<Country[]> {
    const countrys = [];
    for (const countryData of countryDataList) {
      const country = new Country(countryData);
      await country.save();
      countrys.push(country);
    }
    return countrys;
  }
}
