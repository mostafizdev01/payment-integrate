import { userServices } from "./services";
const createUser = async (req, res, next) => {
    const result = await userServices.createUser(req.body);
    res.json({
        data: result,
    });
};
const getUser = async (req, res, next) => {
    const userData = req.user;
    const result = await userServices.getUser(userData);
    res.json({
        success: true,
        status: 200,
        message: "User Get successfull",
        data: result
    });
};
export const userControllers = {
    createUser,
    getUser
};
//# sourceMappingURL=controller.js.map