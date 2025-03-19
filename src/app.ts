import express from "express";
import sequelize from "./config/db";
import getAllRoutes from "./routes/get-routes";
import userRoutes from "./routes/user-routes";
import { User } from "./models/user";
import { Post } from "./models/post";
import { dbSeed } from "./db-seed";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", [getAllRoutes, userRoutes]);



// createData();

// Sync database and start server
const startServer = async () => {
  const PORT = 4000;
  try {
    const isForce = false // enable force and seed db

    await sequelize.sync({ force: isForce }); // Sync database

    if(isForce){
      await dbSeed()
    }

    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
