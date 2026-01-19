import express  from "express"
import { userControllers } from "./controller";
import { auth } from "../../middlewares/auth";

const router = express.Router();

router.post( "/create-user", userControllers.createUser)
router.get( "/me", auth, userControllers.getUser)


export const userRouter = router;