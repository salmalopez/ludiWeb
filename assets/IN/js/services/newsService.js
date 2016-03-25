angular.module('newsService' , [])
	.factory('News', function($http){
		return {
			save: function(data){
				return $http.post('/api/news', data);
			},
			get : function(){
				return $http.get('/api/news');
			},
			getNews : function(id){
				return $http.get('/api/news/'+id);
			},
			updateNews : function(data){
				return $http.put('/api/news/',data);
			},
			destroy : function(id){
				return $http.delete('/api/news/'+id)
			}
		}
	})