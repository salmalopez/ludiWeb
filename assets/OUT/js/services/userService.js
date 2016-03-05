angular.module('user.service', [])
	.factory('User',function ($http) {
		return {
			login : function(data){
				return $http.post('/login',data);
			},
			save : function (data) {
				return $http.post('/api/user',data);
			}

		}
	})



