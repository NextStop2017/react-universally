import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('users', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  email: {
    type: DataType.STRING(255),
    validate: { isEmail: true },
    allowNull: false,
  },

  email_confirmed: {
    type: DataType.BOOLEAN,
    defaultValue: false,
  },
  password: {
    type: DataType.STRING(2048),
    allowNull: false,
  },

  first_name: {
    type: DataType.STRING(255),
  },

  last_name: {
    type: DataType.STRING(255),
  },

}, {

  indexes: [
    { fields: ['email'] },
  ],

});

export default User;
