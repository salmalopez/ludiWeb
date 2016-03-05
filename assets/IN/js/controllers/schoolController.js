angular.module('school-module',['schoolService'])
	.controller('school-controller',function($scope, School){
		$scope.school = {};
		$scope.schoolU = {};
		$scope.schools = [];
		$scope.search = '';
		getSchools();
		function getSchools(){
			School.get().then(function(response){
				$scope.schools = response.data;
			});
		}

		$scope.remove = function(id){
			console.log(id);
			School.destroy(id).then(function(response){
				getSchools();
			});
		};

		$scope.idSchool = function(id){
			console.log(id);
			School.getSchool(id).then(function(response){
				$scope.schoolU = response.data[0];
			});
		};

		$scope.update = function(){
			School.updateSchool($scope.schoolU).then(function(response){
				getSchools();
			})
		};

		$scope.submit = function(){
			console.log($scope.school);
			School.save($scope.school).then(function(response){
				getSchools();
			},function(err){

			});
			$scope.school = {};
		};
	})



