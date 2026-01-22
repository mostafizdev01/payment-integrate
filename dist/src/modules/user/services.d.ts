export declare const userServices: {
    createUser: (payload: {
        name: string;
        email: string;
        password: string;
    }) => Promise<{
        success: boolean;
        status: number;
        message: string;
        result?: never;
    } | {
        success: boolean;
        status: number;
        message: string;
        result: {
            id: string;
            status: import("../../../generated/prisma").$Enums.UserStatus;
            name: string;
            email: string;
            password: string;
            role: import("../../../generated/prisma").$Enums.UserRole;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getUser: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        id: string;
        status: import("../../../generated/prisma").$Enums.UserStatus;
        name: string;
        email: string;
        role: import("../../../generated/prisma").$Enums.UserRole;
    } | null>;
};
//# sourceMappingURL=services.d.ts.map