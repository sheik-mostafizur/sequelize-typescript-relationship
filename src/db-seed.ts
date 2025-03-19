import { Post, User } from "./models";

export const dbSeed = async () => {
  await User.create({
    name: "MD Rohim",
    email: "romni@gmail.com",
  });

  await Post.create({ title: "U1 Post 1", userId: 1 });
  await Post.create({ title: "U1 Post 2", userId: 1 });
  await Post.create({ title: "U1 Post 3", userId: 1 });
};