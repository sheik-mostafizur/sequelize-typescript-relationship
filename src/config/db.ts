import { Sequelize } from "sequelize-typescript";
import models from "../models";

const sequelize = new Sequelize({
  database: "sequelize_test_v0",
  dialect: "postgres",
  username: "postgres",
  password: "postgres",
  models: models,
});

export default sequelize;
