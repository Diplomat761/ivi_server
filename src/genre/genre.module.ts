import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "src/auth/auth.module";
import { GenreController } from "./genre.controller";
import { Genre } from "./genre.model";
import { GenreService } from "./genre.service";

@Module({
  controllers: [GenreController],
  providers: [GenreService],
  imports: [SequelizeModule.forFeature([Genre]), forwardRef(() => AuthModule)],
})
export class GenreModule {}
