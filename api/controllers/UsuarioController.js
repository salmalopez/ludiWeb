/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear : function(req,res){
		try{
			console.log(req.body);
			req.body.creacion = new Date();
			if(!req.body.peso){
				req.body.peso = "0.0";
			}
			if(!req.body.estatura ){
				req.body.estatura = "0";
			}
			usuarioValidate.vacio(req.body,function(response){
				if(response=="OK"){
					usuarioService.crear(req.body,function(response){
						res.json("OK");
					});
				}else{
					res.json(response);
				}
			});
			
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarUsuarios : function(req,res){
		try{
			usuarioService.consultarUsuarios(function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	consultarUsuario : function(req,res){
		try{
			usuarioService.consultarUsuario(req.param('id'),function(response){
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	actualizar : function(req,res){
		try{
			usuarioService.actualizar(req.body,function(response){
				console.log(response);
				res.json(response);
			});
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
	borrar : function(req,res){
		try{
			usuarioService.borrar(req.param('id'),function(response){
				res.json(response);
			})
		}catch(err){
			console.log(err);
			res.json(err);
		}
	},
};

