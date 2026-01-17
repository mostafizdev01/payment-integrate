import { UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";


const loginUser = async (payload: {email:string, password: string})=> {

    const user = await prisma.user.findUnique({
        where: {
            email: payload?.email,
            status: UserStatus.ACTIVE
        }
    })

    if(!user){
        throw new Error("User does't exits!")
    }

    return user;
}


export const userServices = {
    loginUser
}