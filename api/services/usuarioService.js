module.exports = {
	crear : function(usuario,next){
		try{
			Usuario.create(usuario).exec(function(err,response){
				if(err) return next(err);
				return next("OK");
			});
		}catch(err){
			next(err);
		}
	},
	consultarUsuario : function(id,next){
		try{
			Usuario.find({idusuario:id}).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	consultarUsuarios : function(next){
		try{
			Usuario.find({idtipousuario:2}).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	borrar : function(id,next){
		try{
			Usuario.destroy({idusuario:id}).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	actualizar : function(usuario,next){
		try{
			Usuario.update({idusuario:usuario.idusuario},usuario).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	loginApp : function(usuario,next){
		try{
			Usuario.find({usuario:usuario}).exec(function(err,user){
				if(err) throw err;
				if(user[0]){
					next(user[0].idusuario);
				}else{
					next(-1);
				}
			})
		}catch(err){
			return next(err);
		}
	}
}






