import jwt from "jsonwebtoken";
export declare const verifyToken: (token: string, secret: string) => string | jwt.JwtPayload;
export declare const jwtHelper: {
    generateToken: (payload: object, secret: string) => string;
    verifyToken: (token: string, secret: string) => string | jwt.JwtPayload;
};
//# sourceMappingURL=jwtHelper.d.ts.map