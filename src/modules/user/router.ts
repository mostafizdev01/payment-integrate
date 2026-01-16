import express  from "express"
import { userControllers } from "./controller";

const router = express.Router();

router.post( "/create-user", userControllers.createUser)
router.get( "/me", userControllers.getUser)


export const userRouter = router;