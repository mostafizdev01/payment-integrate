import { prisma } from "../../lib/prisma";
import bcryptjs from "bcryptjs"


const createUser = async (payload: {name:string, email:string, password: string})=> {

    const bcryptPassowrd = await bcryptjs.hash(payload.password, 10)

    const exitsUser = await prisma.user.findUnique({
        where: {email: payload.email}
    })

    if(exitsUser){
        return {
            success: false, 
            status: 403,
            message: "Email Already exits!"
        }
    }

    const result = await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: bcryptPassowrd
        }
    })

    return {
        success: true,
        status: 201,
        message: "User created successfull!",
        result
    };
}

const getUser = async (payload: {email: string, password: string})=> {
    const user = await prisma.user.findUnique({
        where: {
            email: payload?.email
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true
        }
    })

    return user;
}


export const userServices = {
    createUser,
    getUser
}