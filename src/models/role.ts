import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsToMany,
  HasMany
} from "sequelize-typescript";
import Permission from "./permission";
import RolePermission from "./role-permission";
import UserRole from "./user-roles";
import { User } from "./user";

@Table({ tableName: "roles", 
  timestamps: true,
  underscored: true,
  createdAt: "created_at",
  updatedAt: "updated_at" })
export class Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  // alternative
  @BelongsToMany(() => Permission, () => RolePermission)
  permissions!: Permission[];


  // Many-to-many relationship between Role and User, using UserRole as the intermediate table
  @HasMany(() => UserRole)
  userRoles!: UserRole[]; // One-to-many relationship with UserRole (as a bridge)

  @BelongsToMany(() => User, ()=> UserRole)
  users!: User[];
}

export default Role;
