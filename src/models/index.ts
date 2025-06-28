export * from "./user";
export * from "./post";
export * from "./foreign-key-null-test";

import { Post } from "./post";
import { User } from "./user";
import { FKNT } from "./foreign-key-null-test";

const models = [User, Post, FKNT];

export default models;
