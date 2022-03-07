export interface User {
  jwt: string;
  user: UserClass;
}

export interface UserClass {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserLogin {
  identifier?: string;
  password?: string;
}
