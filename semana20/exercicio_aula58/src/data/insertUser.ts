import { connection } from "../connection";
import { user } from "../types/user";

export const insertUser = async (user: user) : Promise<void> => {
  try {
    await connection
      .insert({
        id: user.id,
        email: user.email,
        password: user.password,
        role: user.role,
      })
      .into("User_Arq");
  } catch (error: any) {
     throw new Error(error.sqlMessage || error.message);
  }
};
