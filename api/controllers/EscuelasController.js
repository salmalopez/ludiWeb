/**
 * EscuelasController
 *
 * @description :: Server-side logic for managing escuelas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getSchool : function(req,res){
		try{
			console.log('entro');
			escuelaService.getSchool(function(response){
				console.log(response);
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.render('500');
		}
	}
};

