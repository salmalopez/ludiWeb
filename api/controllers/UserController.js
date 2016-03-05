/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save : function(req,res){
		try{
			console.log(req.body);
			UserService.saveUser(req.body, function(response){
				res.json(response);
			});
			
		}catch(err){
			res.render('500');
		}
	},
	get : function(req,res){
		try{
			if(req.param('id')){
				var id = req.param('id');
				UserService.getIdUser(id,function(response){
					res.json(response);
				});
			}else{
				console.log('entro')
				UserService.getUser(function(response){
					res.json(response);
				});
			}
			
		}catch(err){
			res.render('500');
		}
	},
	update : function(req,res){
		try{
			UserService.updateUser(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			res.render('500');
		}
	},
	destroy : function(req,res){
		var id = req.param('id');
		try{
			UserService.destroyUser(id,function(response){
				res.json(response);
			});
		}catch(err){
			res.render('500');
		}
	}
};

