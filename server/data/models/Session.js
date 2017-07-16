import DataType from 'sequelize';
import Model from '../sequelize';

const Session = Model.define('session', {
  sid: {
    type: DataType.STRING(255),
    primaryKey: true,
  },

  sess: {
    type: DataType.STRING(255),
    unique: true,
  },

  expire: {
    type: DataType.DATE,
  },
});

Session.sync();

export default Session;
