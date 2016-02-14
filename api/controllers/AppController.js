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
    res.view('admin',{layout:'admin'});
  }
};

