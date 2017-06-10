/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

import passport from 'passport';
var LocalStrategy = require( 'passport-local' ).Strategy;
import { User, UserLogin, UserProfile } from '../data/models';
import PasswordCrypto from '../data/auth/password-crypto';

// local login strategy
passport.use(new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField : 'username',
  passwordField : 'password',
  callbackURL: '/login',

}, function(username, password, done) {
var passwordCrypto = new PasswordCrypto();
// var user = userRepo.getUserForEmail(username).then(result => {//TODO: user findOne
  User.findOne({where: { email: username }, attributes: ['id','email', 'email_confirmed','password']})
    .then(user => {
      if (user.email_confirmed) {
        return passwordCrypto.verifyPassword(password, user.password, function(err, isVerified) {
          if(!err && isVerified){
            done(null, user);
          } else {
            done(null, false, { message: 'Incorrect password.' });
            console.log('Incorrect password.');
          }
        });
      }
      else {
        done(null, false, { message: 'Email not confirmed' });
        console.log('Email not confirmed');
      }
  }).catch(err => {done(null, false, { message: 'No such user.' });
  console.log('No such user.');
  });
}));



passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.loadOne({ _id: id }).then(function(user) {
        done(null, user);
    }).catch(function(err) {
        done(err, null);
    });
});

export default passport;
