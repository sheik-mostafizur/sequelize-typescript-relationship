import { Post, User, Role, Permission, Todo, UserRole } from "./models";

export const dbSeed = async () => {
  // Create Users
  const admin = await User.create({ name: "MD Admin", email: "admin@gmail.com" });
  const user1 = await User.create({ name: "MD Rohim", email: "romni@gmail.com" });
  const user2 = await User.create({ name: "John Doe", email: "john.doe@gmail.com" });
  const user3 = await User.create({ name: "Jane Smith", email: "jane.smith@gmail.com" });

  // Create Posts
  await Post.bulkCreate([
    { title: "U1 Post 1", userId: user1.id },
    { title: "U1 Post 2", userId: user1.id },
    { title: "U2 Post 1", userId: user2.id },
    { title: "U3 Post 1", userId: user3.id }
  ]);

  const adminRole = await Role.create({ name: "admin" });
  const userRole = await Role.create({ name: "user" });

  const permissions = ["post:create", "post:read", "todo:create", "todo:read"].map(name => ({ name }));
  await Permission.bulkCreate(permissions);

  const [postCreate, postRead, todoCreate, todoRead] = await Permission.findAll();
  await adminRole.$add("permissions", [postCreate, postRead, todoCreate, todoRead]);
  await userRole.$add("permissions", [postRead, todoRead]);

  await UserRole.create({ user_id: admin.id, role_id: adminRole.id })

  const todos = [
    { task: "Buy groceries", completed: false, userId: user1.id },
    { task: "Finish project", completed: false, userId: user2.id },
    { task: "Call mom", completed: true, userId: user3.id },
    { task: "Go for a walk", completed: false, userId: user1.id },
    { task: "Read a book", completed: false, userId: user2.id },
    { task: "Watch a movie", completed: true, userId: user3.id },
  ];

  await Todo.bulkCreate(todos);

  console.log("Database seeded!");
};
