import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Group } from "src/groups/groups.model";
import { PostGroups } from "src/groups/post-groups.model";
import { Image } from "src/images/images.model";
import { Movie } from "src/movies/movies.model";
import { User } from "src/users/users.model";
import { Comment } from "src/comment/comment.model";

interface PostCreationAttrs {
  uniqueName: string;
  title: string;
  content: string;
  userId: number;
  imageId: number;
  movieId: number;
}
@Table({ tableName: "posts" })
export class Posts extends Model<Posts, PostCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "main-hero-text",
    description: "Уникальное название для поиска",
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  uniqueName: string;

  @ApiProperty({ example: "Привет мир!", description: "Заголовок" })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string;

  @ApiProperty({
    example: "Это мой первый пост!",
    description: "Текстовый блок",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: "1", description: "Автор поста" })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => Movie)
  @Column({ type: DataType.INTEGER, allowNull: false })
  movieId: number;

  @BelongsTo(() => Movie)
  movies: Movie;

  @ApiProperty({ example: "2", description: "Картинка поста" })
  @ForeignKey(() => Image)
  @Column({ type: DataType.INTEGER, allowNull: true })
  imageId: number;

  @BelongsTo(() => Image)
  image: Image;

  @BelongsToMany(() => Group, () => PostGroups)
  groups: Group[];

  @HasMany(() => Comment)
  comments: Comment[];
}
