import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

interface MovieCreationAttrs {
  avatars: string;
  name: string;
  original_name: string;
  rating: number;
  years: string;
  durations: string;
  country: string;
  genre: string;
  director: string;
  roles: string;
}
@Table({ tableName: "movies" })
export class Movie extends Model<Movie, MovieCreationAttrs> {
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

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  director: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  roles: string;

  @Column({ type: DataType.DATE, allowNull: true })
  createdAt: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  updatedAt: Date;
}
