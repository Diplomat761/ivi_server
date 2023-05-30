import { Country } from "./country.model";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
export declare class CountryService {
    private countryRepository;
    constructor(countryRepository: typeof Country);
    createManyCountry(countryDataList: any[]): Promise<Country[]>;
    create(dto: CreateCountryDto): Promise<void>;
    getAll(): Promise<Country[]>;
    getById(id: number): Promise<Country>;
    update(id: number, dto: UpdateCountryDto): Promise<void>;
    delete(id: number): Promise<void>;
}
