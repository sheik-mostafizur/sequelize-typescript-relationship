import { Sequelize } from "sequelize-typescript";
import models from "../models";

const sequelize = new Sequelize({
  database: "seq_ts_v2",
  dialect: "mysql",
  username: "root",
  password: "root",
  models: models
});

export default sequelize;
