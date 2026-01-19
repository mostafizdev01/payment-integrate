import jwt from "jsonwebtoken";

const expires = "7d"

const generateToken = (
  payload: object,
  secret: string,
  // expiresIn: string
) => {

    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: expires
    })

  return token;
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};

export const jwtHelper = {
  generateToken,
  verifyToken,
};