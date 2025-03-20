import { Request, Response, NextFunction } from "express";
import { Permission, Role, User } from "../models";


const checkPermission = async (userId: number, permission: string) => {
  const user = await User.findByPk(userId, { include: { model: Role, include: [Permission] } });

  if (!user) return false;

  return user.roles.some(role => role.permissions.some(p => p.name === permission));
};

export const authorize = (permission: string) => async (req: Request, res: Response, next: NextFunction):Promise<void> => {
  // TODO: we set manually userId
  const userId = 1
  // const userId = req.user?.id; // Assuming `req.user` is set after authentication

  if (!userId || !(await checkPermission(userId, permission))) {
     res.status(403).json({ message: "Forbidden" });
  }

  next();
};
