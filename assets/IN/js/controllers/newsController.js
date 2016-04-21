angular.module('news-module',['newsService','angularUtils.directives.dirPagination'])
	.controller('news-controller',function($scope, News){
		$scope.news = {};
		$scope.newsU = {};
		$scope.newsD = {};
		$scope.newsA = [];
		$scope.search = '';
		$scope.successForm = false;
		$scope.successDelete = false;
		$scope.successUpdate = false;
		$scope.currentPage = 1;
  		$scope.pageSize = 4;
		getNews();

		function getNews(){
			News.get().then(function(response){
				console.log(response);
				$scope.newsA = response.data;
			});
		}

		$scope.remove = function(id){
			console.log(id);
			News.destroy(id).then(function(response){
				$scope.successDelete = true;
				getNews();
			});
		};

		$scope.idNews = function(id){
			console.log(id);
			News.getNews(id).then(function(response){
				$scope.newsU = response.data[0];
			});
		};

		$scope.updateFalse = function(){
			$scope.successUpdate = false;
		}

		$scope.modalDelete = function(id){
			$scope.successDelete = false;
			console.log(id);
			$scope.newsD = id;
		};

		$scope.update = function(){
			News.updateNews($scope.newsU).then(function(response){
				$scope.successUpdate = true;
				getNews();
			})
		};

		$scope.submit = function(){
			console.log($scope.news);
			News.save($scope.news).then(function(response){
				$scope.successForm = true;
				getNews();
			},function(err){
				console.log(err);
			});
			$scope.news = {};
		};
	})
	.controller('pagination.controller',function($scope){
		$scope.pageChangeHandler = function(num) {
    		console.log('going to page ' + num);
  		};
	})



