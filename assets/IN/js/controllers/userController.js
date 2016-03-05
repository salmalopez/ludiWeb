angular.module('user-module',['user.module'])
	.controller('user-controller',function($scope, User){
		$scope.user = {};
		$scope.userU = {};
		$scope.users = [];
		$scope.search = '';
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
				getUsers();
			});
		};

		$scope.idUser = function(id){
			console.log(id);
			User.getUser(id).then(function(response){
				$scope.userU = response.data[0];
			});
		};

		$scope.update = function(){
			User.updateUser($scope.userU).then(function(response){
				getUsers();
			})
		};

		$scope.submit = function(){
			console.log($scope.user);
			User.save($scope.user).then(function(response){
				getUsers();
			},function(err){

			});
			$scope.user = {};
		};

	})