/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const UserLogin = Model.define('Login_Log', {
  Login_Log_ID: {
    type: DataType.INTEGER,
    primaryKey: true,
  },

  Session_key: {
    type: DataType.STRING(255),
  },

  Login_DateTime: {
    type: DataType.DATE,
  },

  Login_IP: {
    type: DataType.STRING(100),
  },

  Login_OS: {
    type: DataType.STRING(100),
  },

  Login_WebBrowser: {
    type: DataType.STRING(2048),
  },

  id: {
    type: DataType.UUID,
  },
});

UserLogin.sync();

export default UserLogin;
