import express from "express";
import sequelize from "./config/db";
import getAllRoutes from "./routes/get-routes";
import { User } from "./models/user";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", [getAllRoutes]);

const createData = async () => {
  await User.create({ name: "MD Rohim", email: "romni@gmail.com" });
  await User.create({ name: "jamel", email: "jamel@gmail.com" });
  await User.create({ name: "jasmin", email: "jasmin@gmail.com" });
};

// createData()

// Sync database and start server
const startServer = async () => {
  const PORT = 4000;
  try {
    await sequelize.sync(); // Sync database
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
