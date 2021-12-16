import { JwtPayload, sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface AuthenticationData {
  id: string;
}

export class Authenticator {
  public generateToken = (payload: AuthenticationData) => {
    const token = sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.ACESS_TOKEN_EXPIRES_IN});

    return token;
  };

  public getTokenData = (token: string) => {
    try {
      const tokenData = verify(
        token,
        process.env.JWT_SECRET 
      ) as JwtPayload;

      return {
        id: tokenData.id,
      };
    } catch (error: any) {
      console.log(error);
      return null;
    }
  };
}
