import { CountryService } from "./country.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
export declare class CountryController {
    private countryService;
    constructor(countryService: CountryService);
    createManyCountry(countryDataList: any[]): Promise<import("./country.model").Country[]>;
    create(dto: CreateCountryDto): Promise<void>;
    getAll(): Promise<import("./country.model").Country[]>;
    getOne(id: number): Promise<import("./country.model").Country>;
    update(id: number, dto: UpdateCountryDto): Promise<void>;
    delete(id: number): Promise<void>;
}
