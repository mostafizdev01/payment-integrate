import { prisma } from "../../lib/prisma";


const createUser = async (payload: any)=> {

    const result = await prisma.user.create({
        data: payload
    })

    return result;
}

const getUser = async ()=> {
    const result = await prisma.user.findMany()
    return result;
}


export const userServices = {
    createUser,
    getUser
}