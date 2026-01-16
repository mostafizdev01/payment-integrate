import  express  from 'express';
import { userRouter } from '../modules/user/router';

const router = express.Router();

router.use("/user", userRouter)

export const Routers = router;