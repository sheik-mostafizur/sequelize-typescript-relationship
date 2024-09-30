import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import { Post } from "./post";

interface Address {
  Country: string;
  StateDivision: string;
  CountyDistrict: string;
  CityTown: string;
  PostalCode?: string; // Optional field
  StreetHouseNumber?: string; // Optional field
  present: {
    CityTown: string;
    PostalCode?: string;
    StreetHouseNumber?: string;
  };
}
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  address: Address;
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

  @Column({
    type: DataType.JSON,
    allowNull: false, // This ensures the address field is not null
    validate: {
      hasRequiredFields(value: Address) {
        if (!value.Country || !value.StateDivision || !value.present.CityTown) {
          throw new Error("Required fields in address are missing");
        }
      },
    },
  })
  address!: Address;

  @HasMany(() => Post)
  posts!: Post[]; // One-to-many relationship with Post
}
