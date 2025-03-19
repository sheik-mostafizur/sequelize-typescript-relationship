import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Optional } from "sequelize"; // Import Optional from Sequelize
import { User } from "./user";

// Interface for Todo attributes
interface TodoAttributes {
  id: number;
  task: string;
  completed: boolean;
  userId: number;
}

// Interface for Todo creation attributes (optional id)
interface TodoCreationAttributes extends Optional<TodoAttributes, "id"> {}

@Table({
  tableName: "todos",
  timestamps: true,
  underscored: true,
  createdAt: "created_at",
  updatedAt: "updated_at"
})
export class Todo extends Model<TodoAttributes, TodoCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  task!: string;

  @Column(DataType.BOOLEAN)
  completed!: boolean;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number; // Foreign key to User

  @BelongsTo(() => User)
  user!: User; // Many-to-one relationship with User
}

export default Todo;
