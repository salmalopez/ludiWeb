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
        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
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
            UserService.getLoginApp(req.body.userName,function(response){
                console.log(response.messagge);
                res.send(response.messagge);
            });
        }catch(err){
            res.render('500');
        }
    }
};







