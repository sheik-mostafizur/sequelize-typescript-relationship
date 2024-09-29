import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user"; // Import User model
import { Optional } from "sequelize";

interface PostAttributes {
  id: number;
  title: string;
  userId: number;
}

interface PostAttributesCreationAttributes
  extends Optional<PostAttributes, "id"> {}
@Table
export class Post extends Model<PostAttributesCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  title!: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(() => User)
  user!: User; // Many-to-one relationship with User
}
