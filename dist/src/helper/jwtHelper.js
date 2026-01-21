import jwt from "jsonwebtoken";
const expires = "7d";
const generateToken = (payload, secret) => {
    const token = jwt.sign(payload, secret, {
        algorithm: "HS256",
        expiresIn: expires
    });
    return token;
};
export const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};
export const jwtHelper = {
    generateToken,
    verifyToken,
};
//# sourceMappingURL=jwtHelper.js.map