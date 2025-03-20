export * from "./user";
export * from "./post";
export * from "./permission";
export * from "./todo";
export * from "./role";
export * from "./user-roles";

import Permission from "./permission";
import { Post } from "./post";
import Role from "./role";
import RolePermission from "./role-permission";
import Todo from "./todo";
import { User } from "./user";
import UserRole from "./user-roles";

const models = [User, Post, Todo, Role, UserRole, Permission, RolePermission];

export default models;
