angular.module('user.module', [])
	.factory('User', function($http){
		return {
			save: function(data){
				return $http.post('/api/user', data);
			},
			get : function(){
				return $http.get('/api/user');
			},
			getUser : function(id){
				return $http.get('/api/user/'+id);
			},
			updateUser : function(data){
				return $http.put('/api/user/',data);
			},
			destroy : function(id){
				return $http.delete('/api/user/'+id);
			}
		}
	})