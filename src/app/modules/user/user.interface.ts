import { Model } from 'mongoose';

export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type TUserMethods = {
  isUserExist(id: string): Promise<TUser | null>;
};

export type TUserModel = Model<TUser, Record<string, never>, TUserMethods>;
