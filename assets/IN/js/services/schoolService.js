angular.module('schoolService' , [])
	.factory('School', function($http){
		return {
			save: function(data){
				return $http.post('/api/school', data);
			},
			get : function(){
				return $http.get('/api/school');
			},
			getSchool : function(id){
				return $http.get('/api/school/'+id);
			},
			updateSchool : function(data){
				return $http.put('/api/school/',data);
			},
			destroy : function(id){
				return $http.delete('/api/school/'+id)
			}
		}
	})