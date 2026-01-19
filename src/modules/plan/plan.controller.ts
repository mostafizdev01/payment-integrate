import { NextFunction, Request, Response } from "express";
import { planService } from "./plan.service";

const createPlan = async (req:Request, res:Response, next:NextFunction) => {
    const userEmail = req.user.email;
    const {planPrice} = req.body;
    const result = await planService.createPlan(userEmail, planPrice)
    return res.send(result)
}

export const planController = {
    createPlan
}