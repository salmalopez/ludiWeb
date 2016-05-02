angular.module('state-module',['state.module'])
	.controller('state-controller',function($scope, State){
		$scope.state = {};
		$scope.stateU = {};
		$scope.states = [];
		$scope.search = '';
		$scope.schoolD = {};
		$scope.successForm = false;
		$scope.successDelete = false;
		$scope.successUpdate = false;
		$scope.currentPage = 1;
  		$scope.pageSize = 4;
  		
		getStates();
		
		function getStates(){
			State.get().then(function(response){
				console.log(response);
				$scope.states = response.data;

				console.log(response);
			});
		}

		$scope.remove = function(id){
			console.log(id);
			State.destroy(id).then(function(response){
				$scope.successDelete = true;
				getStates();
			});
		};

		$scope.idState = function(id){
			console.log(id);
			State.getState(id).then(function(response){
				$scope.stateU = response.data[0];
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
			State.updateState($scope.stateU).then(function(response){
				$scope.successUpdate = true;
				getStates();
			})
		};

		$scope.submit = function(){
			console.log($scope.state);
			State.save($scope.state).then(function(response){
				$scope.successForm = true;
				getStates();
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






