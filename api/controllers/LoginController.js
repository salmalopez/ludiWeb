/**
 * LoginController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
module.exports = {
    profile : function(req,res){
        try{
            res.json(req.user);
        }catch(err){
            res.render('500');
        }
    },
    login: function(req, res) {
        console.log("entro al login");
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                console.log("info",info);
                console.log("usuario",user);
                console.log("error",err);
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            console.log(user);
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.send({
                    message: info.message,
                    user: user
                });
            });
        })(req, res);
    },
    logout: function(req, res) {
        try{
            req.logout();
            res.redirect('/');
        }catch(err){
            res.render('500');
        }
    },
    loginApp: function(req,res){
        console.log(req.body);
        try{
            usuarioService.loginApp(req.body.usuario,function(response){
                console.log(response);
                res.json(response);
            });
        }catch(err){
            res.render('500');
        }
    }
};







