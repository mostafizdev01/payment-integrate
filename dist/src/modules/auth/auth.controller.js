import { authServices } from "./auth.service";
const loginUser = async (req, res, next) => {
    const result = await authServices.loginUser(req.body);
    const { accessToken, refreshToken } = result;
    res.cookie("accessToken", accessToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60
    });
    res.cookie("refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 90
    });
    res.json({
        data: result,
    });
};
export const authControllers = {
    loginUser,
};
//# sourceMappingURL=auth.controller.js.map