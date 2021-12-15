import { JwtPayload, sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";
import { authenticationData } from "../entities/authenticationData";

dotenv.config();

export class Authenticator {
  generateToken = (payload: authenticationData) => {
    const token = sign(payload, process.env.JWT_SECRET as string);

    return token;
  };

  getTokenData = (token: string) => {
    try {
      const tokenData = verify(
        token,
        process.env.JWT_SECRET as string
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
