/**
 * SchoolsController
 *
 * @description :: Server-side logic for managing schools
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	save : function(req,res){
		try{
			schoolService.saveSchool(req.body, function(response){
				res.json(response);
			});
			
		}catch(err){
			res.render('500');
		}
	},
	get : function(req,res){
		try{
			if(req.param('id')){
				var id = req.param('id');
				schoolService.getIdSchool(id,function(response){
					res.json(response);
				});
			}else{
				schoolService.getSchool(function(response){
					res.json(response);
				});
			}
			
		}catch(err){
			res.render('500');
		}
	},
	update : function(req,res){
		try{
			schoolService.updateSchool(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			res.render('500');
		}
	},
	destroy : function(req,res){
		var id = req.param('id');
		try{
			schoolService.destroySchool(id,function(response){
				res.json(response);
			});
		}catch(err){
			res.render('500');
		}
	}
};

