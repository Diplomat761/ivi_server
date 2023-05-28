import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Country } from "./country.model";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country) private countryRepository: typeof Country
  ) {}

  async createManyCountry(countryDataList: any[]): Promise<Country[]> {
    const countrys = [];
    for (const countryData of countryDataList) {
      const country = new Country(countryData);
      await country.save();
      countrys.push(country);
    }
    return countrys;
  }

  async create(dto: CreateCountryDto) {
    const createdCountry = await this.countryRepository.create(dto);

    throw new HttpException("Страна добавлена", HttpStatus.OK);
  }

  async getAll() {
    const country = await this.countryRepository.findAll();
    return country;
  }

  async getById(id: number) {
    const country = await this.countryRepository.findOne({
      where: { id },
    });
    return country;
  }

  async update(id: number, dto: UpdateCountryDto) {
    const [rowsAffected, [updatedCountry]] =
      await this.countryRepository.update(dto, {
        returning: true,
        where: { id },
      });
    if (rowsAffected === 0 || !updatedCountry) {
      throw new NotFoundException("Такой страны не существует");
    }
    throw new HttpException("Страна изменена", HttpStatus.OK);
  }

  async delete(id: number) {
    const country = await this.countryRepository.findOne({ where: { id } });

    if (!country) {
      throw new HttpException(
        "Такой страны не существует",
        HttpStatus.BAD_REQUEST
      );
    }

    await country.destroy();
    throw new HttpException("Страна удалена", HttpStatus.OK);
  }
}
