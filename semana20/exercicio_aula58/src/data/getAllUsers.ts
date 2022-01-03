import { connection } from "../connection";

export const getAllUsers = async (): Promise<any> => {
  try {
    const users: any = [];

    const result = await connection("User_Arq").select("*");
    for (let user of result) {
      users.push(user);
    }

    return users;
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};
