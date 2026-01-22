import {Router}  from "express"
import {Router as ExpressRouter }  from "express"
import { userControllers } from "./controller";
import { auth } from "../../middlewares/auth";

const router = Router();

router.post( "/create-user", userControllers.createUser)
router.get( "/me", auth, userControllers.getUser)


export const userRouter:ExpressRouter  = router;