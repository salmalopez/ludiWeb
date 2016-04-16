module.exports = {
	crear : function(usuario,next){
		try{
			Usuario.create(usuario).exec(function(err,response){
				if(err) next(err);
				next(response);
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
			Usuario.find().exec(function(err,response){
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
	}
}