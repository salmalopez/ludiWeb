angular.module('newsService' , [])
	.factory('News', function($http){
		return {
			save: function(data){
				return $http.post('/api/noticia', data);
			},
			get : function(){
				return $http.get('/api/noticia');
			},
			getNews : function(id){
				return $http.get('/api/noticia/'+id);
			},
			updateNews : function(data){
				return $http.put('/api/noticia/',data);
			},
			destroy : function(id){
				return $http.delete('/api/noticia/'+id)
			}
		}
	})