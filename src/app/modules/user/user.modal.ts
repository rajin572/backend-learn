import { model, Schema } from 'mongoose';
import { TUser, TUserMethods, TUserModel } from './user.interface';

const userSchema = new Schema<TUser, TUserModel, TUserMethods>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, min: 6 },
});

userSchema.methods.isUserExist = async function (id: string) {
  const data = await UserModal.findOne({ id });
  return data;
};

const UserModal = model<TUser, TUserModel>('User', userSchema);

export default UserModal;
