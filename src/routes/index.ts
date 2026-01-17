import  express  from 'express';
import { userRouter } from '../modules/user/router';
import { authRouters } from '../modules/auth/auth.route';

const router = express.Router();

router.use("/user", userRouter)
router.use("/auth", authRouters)

export const Routers = router;