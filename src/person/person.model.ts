import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Movie } from "src/movies/movies.model";
import { MoviePerson } from "./movie-person.model";

@Table({ tableName: "person" })
export class Person extends Model<Person> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Movie, () => MoviePerson)
  movies: Movie[];
}
