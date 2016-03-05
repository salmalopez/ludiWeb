/**
 * AppController
 *
 * @description :: Server-side logic for managing Apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `AppController.main()`
   */
  main: function (req, res) {
  	try{
  		if(req.user){
	  		res.view('admin',{layout:'admin'});
	  	}else{
	  		res.view('login',{layout:'login'});
	  	}
  	}catch(err){
  		console.log(err);
  		res.render('500');
  	}
  }
};

