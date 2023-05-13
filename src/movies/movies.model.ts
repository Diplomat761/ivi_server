import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { MoviePerson } from "src/person/movie-person.model";

import { Person } from "src/person/person.model";

@Table({ tableName: "movies" })
export class Movie extends Model<Movie> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  avatars: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  promo: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  original_name: string;

  @Column({ type: DataType.FLOAT, unique: false, allowNull: false })
  rating: number;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  years: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  durations: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  country: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  genre: string;

  @Column({ type: DataType.TEXT, unique: false, allowNull: false })
  text: string;

  @BelongsToMany(() => Person, () => MoviePerson, "movie_id", "person_id")
  actors: Person[];

  @ForeignKey(() => Person)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  director_id: number;

  @BelongsTo(() => Person, "director_id")
  director: Person;
}
