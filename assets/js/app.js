angular.module('adminApp',['ui.router'])
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
                controller: 'homeController'
            })
            .state('home.noticias', {
                url: 'noticias',
                templateUrl: '/templates/noticias.html',
                controller: 'homeController'
            })
            .state('home.escuelas', {
                url: 'escuelas',
                templateUrl: '/templates/escuelas.html',
                controller: 'homeController'
            })
            .state('home.usuarios', {
                url: 'usuarios',
                templateUrl: '/templates/usuarios.html',
                controller: 'homeController'
            })
            ;
	})
	.controller('homeController',function($scope){
		$scope.states = {};
    	$scope.states.activeItem = '0';

		$scope.active = function(id){
			console.log(id);
			$scope.states.activeItem = id;
			console.log($scope.states.activeItem);
		};

		$scope.items = [
			{
				id : '0',
				title : 'Home',
				template : 'home'
			},
			{
				id : '1',
				title : 'Gestión de Escuelas',
				template : 'home.escuelas'
			},
			{
				id : '2',
				title : 'Gestión de Noticias',
				template : 'home.noticias'
			},
			{
				id : '3',
				title : 'Gestión de Usuarios',
				template : 'home.usuarios'
			}
		];
	})


