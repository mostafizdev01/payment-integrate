import express from 'express';
import { planController } from './plan.controller';
import { auth } from '../../middlewares/auth';
const router = express.Router();
router.post("/create-plan", auth, planController.createPlan);
export const planRouter = router;
//# sourceMappingURL=plan.router.js.map