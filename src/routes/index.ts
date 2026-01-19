import  express  from 'express';
import { userRouter } from '../modules/user/router';
import { authRouters } from '../modules/auth/auth.route';
import { planRouter } from '../modules/plan/plan.router';

const router = express.Router();

router.use("/user", userRouter)
router.use("/auth", authRouters)
router.use("/plan", planRouter)

export const Routers = router;