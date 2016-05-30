var bookStoreCtrls = angular.module("bookStoreCtrls",[]);

bookStoreCtrls.controller("HelloCtrl",["$scope",
	function($scope){
		$scope.greeting = {
			text:"hello"
		};
		$scope.pageClass = "hello";
}]);

bookStoreCtrls.controller("BookListCtrl",["$scope",
	function($scope){
		$scope.books = [{
			title:"《Ext江湖》",
			author:"大漠穷秋"
		},{
			title:"《Ext江湖》",
			author:"大漠穷秋"
		},{
			title:"《Ext江湖》",
			author:"大漠穷秋"
		}];
		$scope.pageClass = "list";
}]);
