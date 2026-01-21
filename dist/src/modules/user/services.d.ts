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
            name: string;
            email: string;
            password: string;
            role: import("../../../generated/prisma/enums").UserRole;
            status: import("../../../generated/prisma/enums").UserStatus;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getUser: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../../generated/prisma/enums").UserRole;
        status: import("../../../generated/prisma/enums").UserStatus;
    } | null>;
};
//# sourceMappingURL=services.d.ts.map