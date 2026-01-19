import { NextFunction, Request, Response } from "express";
import { userServices } from "./services";


const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const result = await userServices.createUser(req.body);

    res.json({
        data: result,
    });
};


const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const userData = req.user;
    const result = await userServices.getUser(userData)
    res.json({
        success: true,
        status: 200,
        message: "User Get successfull",
        data: result
    })
}

export const userControllers = {
    createUser,
    getUser
}