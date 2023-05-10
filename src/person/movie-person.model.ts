import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Movie } from "src/movies/movies.model";
import { Person } from "./person.model";

@Table({ tableName: "movie_person", createdAt: false, updatedAt: false })
export class MoviePerson extends Model<MoviePerson> {
  @ForeignKey(() => Movie)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  movie_id: number;

  @ForeignKey(() => Person)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  person_id: number;
}
