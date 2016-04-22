/**
 * EstatusController
 *
 * @description :: Server-side logic for managing estatuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear : function(req,res){
		try{
			console.log(req.body);
			estatusService.crear(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			res.json(err);
		}
	},
	consultarEstatus : function(req,res){
		try{
			estatusService.consultarEstatus(req.param('id'),function(response){
				console.log(response);
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	}

	
};

