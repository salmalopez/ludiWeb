/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	save : function(req,res){
		try{
			NewsService.saveNews(req.body, function(response){
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
				NewsService.getIdNews(id,function(response){
					res.json(response);
				});
			}else{
				NewsService.getNews(function(response){
					res.json(response);
				});
			}
			
		}catch(err){
			res.render('500');
		}
	},
	update : function(req,res){
		try{
			NewsService.updateNews(req.body,function(response){
				res.json(response);
			});
		}catch(err){
			res.render('500');
		}
	},
	destroy : function(req,res){
		var id = req.param('id');
		try{
			NewsService.destroyNews(id,function(response){
				res.json(response);
			});
		}catch(err){
			res.render('500');
		}
	}
};



