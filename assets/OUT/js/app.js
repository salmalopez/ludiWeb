angular.module('adminApp',['ui.router','user.module'])
	.run(function($rootScope){
		
	})
	.config(function($locationProvider, $stateProvider){
		$locationProvider.html5Mode({
			enabled: true,
  			requireBase: false
		});
		$stateProvider
			.state('home', {
                url: '/',
                templateUrl: '/templates/home.html',
                controller: 'userController'
            });
	})
	


