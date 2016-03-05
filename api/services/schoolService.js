module.exports = {
	saveSchool: function (data, next){
		Schools.create(data).exec(function(err, data) {
			console.log(err)
      		if(err) throw err;
      		console.log(data);
      		next(data);
    	});
	},
	getSchool : function(next){
		Schools.find().exec(function(err, schools) {
			if(err) throw err;
			next(schools);
	    });
	},
	getIdSchool : function(id,next){
		Schools.find({id:id}).exec(function(err, school) {
			if(err) throw err;
			next(school);
	    });
	},
	destroySchool : function(id,next){
		Schools.destroy({id:id}).exec(function (err){
			if (err) throw err;
			next({
				messagge : 'OK'
			});
		});
	},
	updateSchool : function(school,next){
		Schools.update({id:school.id},school).exec(function (err, updated){
			if (err) throw err;
			next(updated[0]);
		});
	}
}