import DataType from 'sequelize';
import Model from '../sequelize';

const AuthProviders = Model.define('auth_providers', {
  id: {
    type: DataType.STRING(255),
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  },
});

AuthProviders.sync();

// AuthProviders.sync({ force: true }).then(() =>
// Table created
//  AuthProviders.bulkCreate([
//    {
//      id: '1',
//      name: 'local',
//    },
//    {
//      id: '2',
//      name: 'facebook',
//    },
//    {
//      id: '3',
//      name: 'google',
//    },
//  ]),
// );

export default AuthProviders;
