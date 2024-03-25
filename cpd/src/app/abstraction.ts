export type Nullable<T> = T | null | undefined;

export interface UserData {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  phoneNumber: string,
}

export interface SignInData {
  email: string,
  password: string,
}

export interface User {
  authToken: string;
  refreshToken: string;
  email: string,
  firstName: string,
  lastName: string,
  birthDate: string,
  phoneNumber: string,
}