import { connection } from "../connection";

export const deleteUserById = async (id: string): Promise<void> => {
  try {
    await connection("User_Arq").where({ id }).del();
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};
