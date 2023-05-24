import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Movie } from "src/movies/movies.model";

@Table({ tableName: "genre" })
export class Genre extends Model<Genre> {
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
  value: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  value_EN: string;

  @HasMany(() => Movie)
  movies: Movie[];
}
