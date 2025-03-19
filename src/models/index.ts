export * from "./user";
export * from "./post";
export * from "./permission";
export * from "./todo";
export * from "./role";

import Permission from "./permission";
import { Post } from "./post";
import Role from "./role";
import RolePermission from "./role-permission";
import Todo from "./todo";
import { User } from "./user";

const models = [User, Post, Todo, Role, Permission, RolePermission];

export default models;
