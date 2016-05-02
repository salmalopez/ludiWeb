/**
 * NoticiaController
 *
 * @description :: Server-side logic for managing noticias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear : function(req,res){
		req.body.fecha = new Date();
		req.body.idusuario = req.user.idusuario;
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
	},
	longitudNoticia : function(req,res){
		try{
			noticiaService.consultarNoticiasLongitud(function(response){
				res.json(response.length);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	textoNoticia : function(req,res){
		try{
			noticiaService.consultarTextoNoticia(req.param('id'),function(response){
				res.json(response[0].contenido);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	}
};

