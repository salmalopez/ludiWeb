/**
 * EscuelaController
 *
 * @description :: Server-side logic for managing escuelas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear : function(req,res){
		try{
			escuelaService.crear(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarEscuela : function(req,res){
		try{
			escuelaService.consultarEscuela(req.param('id'),function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarEscuelas : function(req,res){
		try{
			escuelaService.consultarEscuelas(function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	actualizar : function(req,res){
		try{
			escuelaService.actualizar(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	borrar : function(req,res){
		try{
			escuelaService.borrar(req.param('id'),function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	}
};

