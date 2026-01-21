import bcrypt from 'bcryptjs';
import { UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { jwtHelper } from '../../helper/jwtHelper';
const loginUser = async (payload) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload?.email,
            status: UserStatus.ACTIVE
        }
    });
    if (!user) {
        return {
            success: false,
            status: 503,
            message: "User does't exits!"
        };
    }
    const isCompiredPass = await bcrypt.compare(payload.password, user.password);
    if (!isCompiredPass) {
        return {
            success: false,
            status: 403,
            message: "Password does't match!"
        };
    }
    const accessToken = await jwtHelper.generateToken({ email: user.email, role: user.role }, "jwtsecret");
    const refreshToken = await jwtHelper.generateToken({ email: user.email, role: user.role }, "jwtsecret");
    const { password, ...data } = user;
    return {
        success: true,
        status: 200,
        message: "Login Successfull!",
        data,
        accessToken,
        refreshToken
    };
};
export const authServices = {
    loginUser
};
//# sourceMappingURL=auth.service.js.map