angular.module('schoolService' , [])
	.factory('School', function($http){
		return {
			save: function(data){
				return $http.post('/api/escuela', data);
			},
			get : function(){
				return $http.get('/api/escuela');
			},
			getSchool : function(id){
				return $http.get('/api/escuela/metodo/info/'+id);
			},
			updateSchool : function(data){
				return $http.put('/api/escuela/',data);
			},
			destroy : function(id){
				return $http.delete('/api/escuela/'+id)
			},
			getStates : function(){
				return $http.get('/api/estado');
			}
		}
	})