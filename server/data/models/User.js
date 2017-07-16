import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define(
  'users',
  {
    User_ID: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    User_Email: {
      type: DataType.STRING(255),
      validate: { isEmail: true },
      allowNull: false,
    },

    email_confirmed: {
      type: DataType.BOOLEAN,
      defaultValue: false,
    },

    User_Password: {
      type: DataType.STRING(2048),
      allowNull: false,
    },

    User_FirstName: {
      type: DataType.STRING(255),
      allowNull: false,
    },

    User_LastName: {
      type: DataType.STRING(255),
      allowNull: false,
    },

    User_createDatetime: {
      type: DataType.DATE,
    },

    User_updateDatetime: {
      type: DataType.DATE,
    },

    User_DOB: {
      type: DataType.DATE,
    },

    User_Gender: {
      type: DataType.CHAR(1),
    },

    User_Country: {
      type: DataType.STRING(50),
    },

    User_Status: {
      type: DataType.CHAR(1),
    },

    /**  gender: {
    type: DataType.STRING(1),
  },
**/
  },
  {
    indexes: [{ fields: ['User_Email'] }],
  },
);

User.sync();

export default User;
