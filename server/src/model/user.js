import mongoose from 'mongoose';
import validator from 'validator';

const UserShema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Неправильный формат почты',
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserShema);
export default User;

