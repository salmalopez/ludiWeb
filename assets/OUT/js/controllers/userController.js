angular.module('user.module',['user.service'])
	.controller('userController',function($scope,User,$window){
		$scope.profile = {};
		$scope.formMessage = '';
		$scope.login = function(){
			console.log($scope.profile);
			User.login($scope.profile).then(function(res){
				if(res.data.message == 'OK') { 
					$window.location.href = '/' 
				}else {
					$scope.formMessage = '*' + res.data.message;
				}
				console.log(res);
			})
		}
	})