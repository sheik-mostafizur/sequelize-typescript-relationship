import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType
} from "sequelize-typescript";
import { Optional } from "sequelize"; // Import Optional from Sequelize for creation attributes

// Interface for Permission attributes
interface PermissionAttributes {
  id: number;
  name: string;
}

// Interface for Permission creation attributes (optional id)
interface PermissionCreationAttributes extends Optional<PermissionAttributes, "id"> {}

@Table({
  tableName: "permissions",
  timestamps: true,
  underscored: true,
  createdAt: "created_at",
  updatedAt: "updated_at"
})
export class Permission extends Model<PermissionAttributes, PermissionCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;
}

export default Permission;
