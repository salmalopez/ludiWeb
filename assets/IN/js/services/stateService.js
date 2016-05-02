angular.module('state.module', [])
	.factory('State', function($http){
		return {
			save: function(data){
				return $http.post('/api/estado', data);
			},
			get : function(){
				return $http.get('/api/estado');
			},
			getState : function(id){
				return $http.get('/api/estado/'+id);
			},
			updateState : function(data){
				return $http.put('/api/estado/',data);
			},
			destroy : function(id){
				return $http.delete('/api/estado/'+id);
			}
		}
	})