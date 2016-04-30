var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy,
bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user.idusuario);
});

passport.deserializeUser(function(id, done) {
    Usuario.findOne({ idusuario: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    Usuario.findOne({ usuario: email }, function (err, user) {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'Usuario incorrecto.' });
      }

      if(password != user.password){
          return done(null, false, {
              message: 'Contraseña incorrecta.'
            });
      }else{
        var returnUser = {
            email: user.usuario,
            idusuario: user.idusuario
          };
          
          return done(null, returnUser, {
            message: 'OK'
          });
      }

    
    });
  }
));