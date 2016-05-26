var BookStoreApp = angular.module("BookStoreApp",[
		"ngRoute","ngAnimate","bookStoreCtrls",'bookStoreFilters',
    'bookStoreServices', 'bookStoreDirectives'

	]);

BookStoreApp.config(function($routeProvider){
	$routeProvider.when("/hello",{
		templateUrl:"tpls/hello.html",
		controller:"HelloCtrl"
	}).when("/list",{
		templateUrl:"tpls/bookList.html",
		controller:"BookListCtrl"
	}).otherwise({
		redirectTo:"/hello"
	})
});
