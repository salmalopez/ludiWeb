/**
 * NoticiaController
 *
 * @description :: Server-side logic for managing noticias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear : function(req,res){
		try{
			noticiaService.crear(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarNoticia : function(req,res){
		try{
			noticiaService.consultarNoticia(req.param('id'),function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarNoticias : function(req,res){
		try{
			noticiaService.consultarNoticias(function(response){
				res.json(response);
			});			
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	actualizar : function(req,res){
		try{
			console.log(req.body);
			noticiaService.actualizar(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	borrar : function(req,res){
		try{
			noticiaService.borrar(req.param('id'),function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	}
};

