angular.module('user.module', [])
	.factory('User', function($http){
		return {
			save: function(data){
				return $http.post('/api/usuario', data);
			},
			get : function(){
				return $http.get('/api/usuario');
			},
			getUser : function(id){
				return $http.get('/api/usuario/'+id);
			},
			updateUser : function(data){
				return $http.put('/api/usuario/',data);
			},
			destroy : function(id){
				return $http.delete('/api/usuario/'+id);
			}
		}
	})