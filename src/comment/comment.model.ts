import { Post } from "@nestjs/common";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Posts } from "src/posts/posts.model";
import { User } from "src/users/users.model";

interface CommentCreationAttrs {
  content: string;
  userId: number;
  postId: number;
}
@Table({ tableName: "comments" })
export class Comment extends Model<Comment, CommentCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;

  @ForeignKey(() => Posts)
  @Column({ type: DataType.INTEGER })
  postId: number;

  @BelongsTo(() => Posts)
  posts: Posts;
}
