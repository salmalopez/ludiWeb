module.exports = {
	crear : function(escuela,next){
		try{
			Escuela.create(escuela).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			next(err);
		}
	},
	consultarEscuela : function(id,next){
		try{
			Escuela.find({idescuela:id}).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			next(err);
		}
	},
	consultarEscuelas : function(next){
		try{
			Escuela.find().populate('owner').exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			next(err);
		}
	},
	actualizar : function(escuela,next){
		try{
			Escuela.update({idescuela:escuela.idescuela},escuela).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			next(err);
		}
	},
	borrar : function(id,next){
		try{
			Escuela.destroy({idescuela:id}).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			next(err);
		}
	}
}




