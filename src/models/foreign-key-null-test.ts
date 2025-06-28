import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from "sequelize-typescript";
import { User } from "./user"; // Import User model
import { Optional } from "sequelize";

interface FKNTAttributes {
  id: number;
  title: string;
  userId: number;
}

interface FKNTAttributesCreationAttributes
  extends Optional<FKNTAttributes, "id"> {}

@Table({
  tableName: "fknt",
  timestamps: true,
  underscored: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
})
export class FKNT extends Model<FKNTAttributesCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  title!: string;

  @AllowNull(true)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
