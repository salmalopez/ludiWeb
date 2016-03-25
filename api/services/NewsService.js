module.exports = {
	saveNews: function (data, next){
		News.create(data).exec(function(err, data) {
			console.log(err)
      		if(err) throw err;
      		console.log(data);
      		next(data);
    	});
	},
	getNews : function(next){
		News.find().exec(function(err, news) {
			if(err) throw err;
			next(news);
	    });
	},
	getIdNews : function(id,next){
		News.find({id:id}).exec(function(err, news) {
			if(err) throw err;
			next(news);
	    });
	},
	destroyNews : function(id,next){
		News.destroy({id:id}).exec(function (err){
			if (err) throw err;
			next({
				messagge : 'OK'
			});
		});
	},
	updateNews : function(news,next){
		News.update({id:news.id},news).exec(function (err, updated){
			if (err) throw err;
			next(updated[0]);
		});
	}
}