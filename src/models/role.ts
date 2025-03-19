import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsToMany
} from "sequelize-typescript";
import Permission from "./permission";
import RolePermission from "./role-permission";

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

  // don't need to create model for role_permissions
  // @BelongsToMany(() => Permission, "role_permissions", "role_id", "permission_id")
  // permissions!: Permission[];

  // alternative
  @BelongsToMany(() => Permission, () => RolePermission)
  permissions!: Permission[];
}

export default Role;
