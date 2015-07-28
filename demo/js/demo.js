var demoApp = angular.module("demoapp", ['ngAnimate', 'md.chips.select'/*, "material.components.icon", "ngMaterial",'material.core', 'material.components.autocomplete'*/])

demoApp.controller('mainCtrl', ["$scope", function($scope){
	console.log("Controller initializing...");
}]);

demoApp.controller('chipsCtrl', ["$scope", function($scope){
	$scope.fruitNames = ["Apple"];
}]);
demoApp.controller('chipsSelectCtrl', ["$scope", function($scope){
	$scope.myItems = [];
	$scope.sItems = [{
      name: "Mini Cooper",
      id: 0
    }, {
      name: "Lexus IS250",
      id: 1
    }, {
      name: "Ford F150",
      id: 2
    }, {
      name: "Toyota Prius",
      id: 3
    }];
}]);

demoApp.controller('cChipsSelectCtrl', ["$scope", function($scope){
  
    $scope.selectedCoutries = [];
    $scope.countiesList = [{
      country: "Taiwan",
      id: 0
    }, {
      country: "United States",
      id: 1
    }, {
      country: "United Kingdom",
      id: 2
    }, {
      country: "Hong Kong",
      id: 3
    }];
}]);