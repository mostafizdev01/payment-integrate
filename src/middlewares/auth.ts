import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {

  let token: string | undefined;
  //   const token = req.headers.cookie?.split(" ")[0] || req.headers.authorization?.split(" ")[0];
  const rawCookie = req.headers.cookie;
  
  if (rawCookie) {
    token = rawCookie
    .split("; ")
    .find(c => c.startsWith("accessToken="))
    ?.split("=")[1];
  }


  if (!token) return res.status(401).json({ message: "Unauthorized Access!" });

  const decoded = jwt.verify(token, "jwtsecret");
  req.user = decoded;
  next();
};
