module.exports = {
	crear : function(estado,next){
		try{
			Estado.create(estado).exec(function(err,response){
				return next(response);
			});			
		}catch(err){
			if(err) return next(err);
			return next(err);
		}
	},
	consultarEstados : function(next){
		try{
			Estado.find().exec(function(err,response){
				if(err) return next(err);
				return next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	consultarEstado : function(id,next){
		try{
			Estado.find({idestado:id}).exec(function(err,response){
				if(err) return next(err);
				return next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	actualizar : function(estado,next){
		try{
			Estado.update({idestado:estado.idestado},estado).exec(function(err,response){
				if(err) return next(err);
				return next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	borrar : function(id,next){
		try{
			Estado.destroy({idestado:id}).exec(function(err,response){
				if(err) return next(err);
				return next(response);
			});
		}catch(err){
			if(err) return next(err);
			return next(err);
		}
	},
}