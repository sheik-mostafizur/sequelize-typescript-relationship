import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: "seq_ts_v2",
  dialect: "mysql",
  username: "root",
  password: "root",
});

export default sequelize;
