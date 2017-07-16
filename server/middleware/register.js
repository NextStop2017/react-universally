import { User, UserLogin, UserProfile } from '../data/models';
import PasswordCrypto from '../data/auth/password-crypto';

var register = (req, res) => {
  // by default, local strategy uses username and password, we will override with email
  var input = {
    username: req.body.username,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };

  var passwordCrypto = new PasswordCrypto();
  // var user = userRepo.getUserForEmail(username).then(result => {//TODO: user findOne
  User.findOne({
    where: { email: input.username },
    attributes: ['id', 'email', 'email_confirmed', 'password'],
  }).then((user) => {
    if (user == null) {
      var pw = passwordCrypto.hashPassword(input.password, (err, isHashed) => {
        if (!err && isHashed) {
          console.log(isHashed);
          User.create({
            email: input.username,
            password: input.password,
            first_name: input.first_name,
            last_name: input.last_name,
            auth_id: '1',
          }).then(() =>
            res.send({
              code: 200,
              success: 'user registered sucessfully',
            }),
          );
        }
      });
    }
  });
};
/* passwordCrypto.verifyPassword(password, user.password, function(err, isVerified) {
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
  });
  });
}));*/

export default register;
