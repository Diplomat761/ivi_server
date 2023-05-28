import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "src/auth/auth.module";
import { CountryController } from "./country.controller";
import { Country } from "./country.model";
import { CountryService } from "./country.service";

@Module({
  controllers: [CountryController],
  providers: [CountryService],
  imports: [
    SequelizeModule.forFeature([Country]),
    forwardRef(() => AuthModule),
  ],
})
export class CountryModule {}
