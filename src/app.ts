import express from "express";
import sequelize from "./config/db";
import getAllRoutes from "./routes/get-routes";
import { User } from "./models/user";
import { Post } from "./models/post";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", [getAllRoutes]);

const createData = async () => {
  await User.create({ name: "MD Rohim", email: "romni@gmail.com" });
  await User.create({ name: "jamel", email: "jamel@gmail.com" });
  await User.create({ name: "jasmin", email: "jasmin@gmail.com" });

  await Post.create({ title: "U1 Post 1", userId: 1 });
  await Post.create({ title: "U1 Post 2", userId: 1 });
  await Post.create({ title: "U1 Post 3", userId: 1 });

  await Post.create({ title: "U2 Post 1", userId: 2 });
  await Post.create({ title: "U2 Post 2", userId: 2 });
  await Post.create({ title: "U2 Post 3", userId: 2 });

  await Post.create({ title: "U3 Post 1", userId: 3 });
  await Post.create({ title: "U3 Post 2", userId: 3 });
  await Post.create({ title: "U3 Post 3", userId: 3 });
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
