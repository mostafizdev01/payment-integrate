import {Router}  from "express"
import {Router as ExpressRouter }  from "express"
import { authControllers } from "./auth.controller";

const router = Router();

router.post( "/login", authControllers.loginUser)


export const authRouters:ExpressRouter  = router;