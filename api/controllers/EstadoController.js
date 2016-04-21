/**
 * EstadoController
 *
 * @description :: Server-side logic for managing estadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear : function(req,res){
		try{
			estadoService.crear(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarEstados : function(req,res){
		try{
			estadoService.consultarEstados(function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarEstado : function(req,res){
		try{
			estadoService.consultarEstado(req.param('id'),function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	actualizar : function(req,res){
		try{
			estadoService.actualizar(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	borrar : function(req,res){
		try{
			estadoService.borrar(req.param('id'),function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},

};

