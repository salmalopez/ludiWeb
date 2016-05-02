angular.module('school-module',['schoolService','angularUtils.directives.dirPagination'])
	.controller('school-controller',function($scope, School){
		$scope.school = {};
		$scope.states = {};
		$scope.schoolU = {};
		$scope.schoolD = {};
		$scope.schools = [];
		$scope.search = '';
		$scope.successForm = false;
		$scope.successDelete = false;
		$scope.successUpdate = false;
		$scope.currentPage = 1;
  		$scope.pageSize = 10;
  		$scope.BD = false;
		getSchools();
		getStates();

		function getSchools(){
			School.get().then(function(response){
				console.log(response);
				$scope.BD = true;
				$scope.schools = response.data;
			});
		}

		function getStates(){
			School.getStates().then(function(response){
				$scope.states = response.data;
				console.log($scope.states);
			});
		}

		$scope.remove = function(id){
			console.log(id);
			School.destroy(id).then(function(response){
				$scope.successDelete = true;
				getSchools();
			});
		};

		$scope.idSchool = function(id){
			console.log(id);
			School.getSchool(id).then(function(response){
				console.log(response);
				$scope.schoolU = response.data[0];
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
			School.updateSchool($scope.schoolU).then(function(response){
				$scope.successUpdate = true;
				getSchools();
			})
		};

		$scope.submit = function(){
			console.log($scope.school);
			School.save($scope.school).then(function(response){
				$scope.successForm = true;
				console.log(response);
				getSchools();
			},function(err){
				console.log(err);
			});
			$scope.school = {};
		};
	})
	.controller('pagination.controller',function($scope){
		$scope.pageChangeHandler = function(num) {
    		console.log('going to page ' + num);
  		};
	})



