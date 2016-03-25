angular.module('user-module',['user.module'])
	.controller('user-controller',function($scope, User){
		$scope.user = {};
		$scope.userU = {};
		$scope.users = [];
		$scope.search = '';
		$scope.schoolD = {};
		$scope.successForm = false;
		$scope.successDelete = false;
		$scope.successUpdate = false;
		$scope.currentPage = 1;
  		$scope.pageSize = 4;
		getUsers();
		
		function getUsers(){
			User.get().then(function(response){
				$scope.users = response.data;
				console.log(response);
			});
		}

		$scope.remove = function(id){
			console.log(id);
			User.destroy(id).then(function(response){
				$scope.successDelete = true;
				getUsers();
			});
		};

		$scope.idUser = function(id){
			console.log(id);
			User.getUser(id).then(function(response){
				$scope.userU = response.data[0];
			});
		};

		$scope.updateFalse = function(){
			$scope.successUpdate = false;
		}

		$scope.modalDelete = function(id){
			$scope.successDelete = false;
			console.log(id);
			$scope.schoolD = id;
		};

		$scope.update = function(){
			User.updateUser($scope.userU).then(function(response){
				$scope.successUpdate = true;
				getUsers();
			})
		};

		$scope.submit = function(){
			console.log($scope.user);
			User.save($scope.user).then(function(response){
				$scope.successForm = true;
				getUsers();
			},function(err){

			});
			$scope.user = {};
		};

	})
	.controller('pagination.controller',function($scope){
		$scope.pageChangeHandler = function(num) {
    		console.log('going to page ' + num);
  		};
	})






