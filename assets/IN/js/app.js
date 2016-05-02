angular.module('adminApp',['ui.router','user-module','school-module','news-module','user.module','state-module'])
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
                templateUrl: 'IN/templates/home.html',
                controller: 'homeController'
            })
            .state('home.noticias', {
                url: 'noticias',
                templateUrl: 'IN/templates/noticias.html',
                controller: 'news-controller'
            })
            .state('home.escuelas', {
                url: 'escuelas',
                templateUrl: 'IN/templates/escuelas.html',
                controller: 'school-controller'
            })
            .state('home.usuarios', {
                url: 'usuarios',
                templateUrl: 'IN/templates/usuarios.html',
                controller: 'user-controller'
            })
            .state('home.estados', {
                url: 'estados',
                templateUrl: 'IN/templates/estados.html',
                controller: 'state-controller'
            })
            ;
	})
	.controller('homeController',function($scope,$location,User){
		$scope.states = {};
    	activeItem($location.path());
    	function activeItem(url){
    		switch(url){
    			case '/':
    				$scope.states.activeItem = '0';
    				break;
    			case '/escuelas' :
    				$scope.states.activeItem = '1';
    				break;
    			case '/noticias' :
    				$scope.states.activeItem = '2';
    				break;
    			case '/usuarios' :
    				$scope.states.activeItem = '3';
    				break;
    			default : 
    				$scope.states.activeItem = '0';
    				break;
    		}
    			
    	}

		$scope.items = [
			{
				id : '0',
				title : 'Inicio',
				template : 'home'
			},
			{
				id : '1',
				title : 'Gestión de Escuelas',
				template : 'home.escuelas'
			},
            {
                id : '3',
                title : 'Gestión de Usuarios',
                template : 'home.usuarios'
            },
			{
				id : '2',
				title : 'Gestión de Noticias',
				template : 'home.noticias'
			},
            {
                id : '4',
                title : 'Gestión de Estados',
                template : 'home.estados'
            }
		];
	})


