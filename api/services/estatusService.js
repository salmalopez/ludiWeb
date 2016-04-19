module.exports = {
	crear : function(estatus,next){
		try{
			Estatus.create(estatus).exec(function(err,response){
				if(err) next(err);
				next(response);
			});
		}catch(err){
			return next(err);
		}
	}
}