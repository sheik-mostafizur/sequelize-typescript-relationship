import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import { Post } from "./post";
import Role from "./role";
import UserRole from "./user-roles";


interface UserAttributes {
  id: number;
  name: string;
  email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
  tableName: "users",
  timestamps: true,
  underscored: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  email!: string;


  @HasMany(() => Post)
  posts!: Post[]; // One-to-many relationship with Post


  @BelongsToMany(() => Role, ()=> UserRole)
  roles!: Role[];
}
