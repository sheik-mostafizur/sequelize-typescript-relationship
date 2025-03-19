import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType
} from "sequelize-typescript";
import { Role } from "./role";
import { Permission } from "./permission";

@Table({ tableName: "role_permissions" })
export class RolePermission extends Model {
  @ForeignKey(() => Role)
  @Column(DataType.INTEGER)
  roleId!: number;

  @ForeignKey(() => Permission)
  @Column(DataType.INTEGER)
  permissionId!: number;
}

export default RolePermission;
