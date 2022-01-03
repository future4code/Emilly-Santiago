import { user, userInput, login } from "../types/user";
import { generateId } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { generateToken, getTokenData } from "../services/authenticator";
import { insertUser } from "../data/insertUser";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { compare } from "../services/hashManager";
import { getAllUsers } from "../data/getAllUsers";
import { deleteUserById } from "../data/deleteUserById";

export class UserBusiness {
  signUpBusiness = async (user: userInput): Promise<string> => {
    const { name, email, password, role } = user;
    if (!name || !email || !password || !role) {
      throw new Error("Preencha todos os campos corretamente");
    }

    if (user.email.indexOf("@") === -1) {
      throw new Error("Email inválido");
    }

    if (user.password.length < 6) {
      throw new Error("A senha deve ter no mínimo 6 caracteres");
    }
    const id: string = generateId();
    const hashPassword = await hash(user.password);

    await insertUser({
      id,
      name: user.name,
      email: user.email,
      password: hashPassword,
      role: user.role,
    });

    const token: string = generateToken({
      id,
      role: user.role,
    });

    return token;
  };

  loginBusiness = async (login: login): Promise<string> => {
    if (!login.email || !login.password) {
      throw new Error("'email' e 'senha' são obrigatórios");
    }

    const user: user = await selectUserByEmail(login.email);

    if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta (Bussines)");
    }

    const passwordIsCorrect: boolean = await compare(
      login.password,
      user.password
    );

    if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta");
    }

    const token: string = generateToken({
      id: user.id,
      role: user.role,
    });

    return token;
  };

  getAllUsers_Business = async (token: string) => {
    const autentication = getTokenData(token);

    if (!autentication) {
      throw new Error("Token inválido");
    }
    return await getAllUsers();
  };

  deleteUserById_Business = async (input: { id: string; token: string }) => {
    const verifiedToken = getTokenData(input.token);
    if (verifiedToken.role !== "ADMIN") {
      throw new Error("Apenas administradores podem deletar usuários!");
    }
    return await deleteUserById(input.id);
  };
}
