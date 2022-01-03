export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}

export type authenticationData = {
  id: string;
  role: USER_ROLES;
};

export interface userInput {
  name: string;
  email: string;
  password: string;
  role: USER_ROLES;
};

export interface user extends userInput{
  id: string;
};

export type login = {
  email: string;
  password: string;
};
