/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import User from './User';
import UserLogin from './UserLogin';
import UserProfile from './UserProfile';
import AuthProviders from './AuthProviders';

User.hasMany(UserLogin, {
  foreignKey: 'id',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});


User.hasOne(UserProfile, {
  foreignKey: 'id',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.belongsTo(AuthProviders, {
  foreignKey: 'auth_id',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});


function sync(...args) {
  return sequelize.sync(...args);
}
// sync();


export default { sync };
export { User, UserLogin, UserProfile, AuthProviders};
