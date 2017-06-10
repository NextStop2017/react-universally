import DataType from 'sequelize';
import Model from '../sequelize';

const Session = Model.define('Session', {

  sid: {
    type: DataType.STRING(255),
    primaryKey: true,
  },

  sess: {
    type: DataType.JSON,
  },
  
  expire: {
    type: DataType.date(6),
  },
  
});

//Session.sync();

export default Session;
