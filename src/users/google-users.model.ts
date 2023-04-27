import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface GoogleUserCreationAttrs {
  email: string;
  displayName: string;
}
@Table({ tableName: "google-users" })
export class GoogleUser extends Model<GoogleUser, GoogleUserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "user@mail.com", description: "Почтовый адрес" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: "Илья Муромец", description: "Имя и фамилия" })
  @Column({ type: DataType.STRING, allowNull: false })
  displayName: string;
}
