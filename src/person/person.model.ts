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

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  avatar: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  full_name_EN: string;

  @Column({ type: DataType.TEXT, unique: false, allowNull: false })
  description: string;

  @Column({ type: DataType.TEXT, unique: false, allowNull: true })
  description_EN: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  DOB: string;

  @BelongsToMany(() => Movie, () => MoviePerson)
  movies: Movie[];
}
