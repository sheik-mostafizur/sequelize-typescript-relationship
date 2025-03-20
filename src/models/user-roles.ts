import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./user";
import { Role } from "./role";

@Table({
  tableName: "user_roles",
  timestamps: true,
  underscored: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class UserRole extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  user_id!: number;

  @ForeignKey(() => Role)
  @Column(DataType.INTEGER)
  role_id!: number;
}

export default UserRole;