var demoApp = angular.module("demoapp", ['ngAnimate', 'md.chips.select'/*, "material.components.icon", "ngMaterial",'material.core', 'material.components.autocomplete'*/])

demoApp.controller('mainCtrl', ["$scope", function($scope){
	console.log("Controller initializing...");
}]);

demoApp.controller('chipsCtrl', ["$scope", function($scope){
	$scope.fruitNames = ["Apple"];
}]);
demoApp.controller('chipsSelectCtrl', ["$scope", function($scope){
	$scope.myItems = [];
	$scope.sItems = [
		{ name: "Veges", id: 0},
		{ name: "Rice", id: 1},
		{ name: "Noodle", id: 2},
		{ name: "Soup", id: 3}];
}]);