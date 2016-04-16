module.exports = {
	crear : function(noticia,next){
		try{
			Noticia.create(noticia).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	consultarNoticia : function(id,next){
		try{
			Noticia.find({idnoticia:id}).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	consultarNoticias : function(next){
		try{
			Noticia.find().populate('owner').exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	borrar : function(id,next){
		try{
			Noticia.destroy({idnoticia:id}).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
	actualizar : function(noticia,next){
		try{
			Noticia.update({idnoticia:noticia.idnoticia},noticia).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	},
}