angular.module('appRoutes', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider, $locationProvider){
	$locationProvider.html5Mode(true); //this removes # from path
	$urlRouterProvider.otherwise('/');		
	
	$stateProvider		
	.state('home', {
		url:'/',
		templateUrl: "views/home.html"
	})
	.state('about', {
		url:'/about',
		templateUrl: "views/about.html"
	});
});
