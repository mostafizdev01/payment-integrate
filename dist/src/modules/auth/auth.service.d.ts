import { UserStatus } from "../../../generated/prisma/enums";
export declare const authServices: {
    loginUser: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        success: boolean;
        status: number;
        message: string;
        data?: never;
        accessToken?: never;
        refreshToken?: never;
    } | {
        success: boolean;
        status: number;
        message: string;
        data: {
            id: string;
            name: string;
            email: string;
            role: import("../../../generated/prisma/enums").UserRole;
            status: UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map