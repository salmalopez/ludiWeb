module.exports = {
	saveUser: function (data, next){
		User.create(data).exec(function(err, data) {
			console.log(err)
      		if(err) throw err;
      		console.log(data);
      		next(data);
    	});
	},
	getUser : function(next){
		User.find().exec(function(err, Users) {
			if(err) throw err;
			next(Users);
	    });
	},
	getIdUser : function(id,next){
		User.find({id:id}).exec(function(err, User) {
			if(err) throw err;
			next(User);
	    });
	},
	destroyUser : function(id,next){
		User.destroy({id:id}).exec(function (err){
			if (err) throw err;
			next({
				messagge : 'OK'
			});
		});
	},
	updateUser : function(user,next){
		User.update({id:user.id},user).exec(function (err, updated){
			if (err) throw err;
			next(updated[0]);
		});
	},
	getLoginApp : function(user,next){
		User.find({userName:user}).exec(function(err,User){
			if(err) throw err;
			if(User[0]){
				console.log('existe');
				next({
					messagge : 'OK'
				});
			}else{
				console.log('no existe');
				next({
					messagge : 'NO_OK'
				})
			}
		})
	}
}