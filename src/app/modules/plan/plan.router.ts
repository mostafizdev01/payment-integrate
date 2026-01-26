import express, { Router } from 'express';
import { planController } from './plan.controller';
import { auth } from '../../lib/auth';

const router = express.Router();

router.post( "/create-plan", auth, planController.createPlan
)
router.get( "/", planController.getAllPlan
)

export const planRouter: Router = router;