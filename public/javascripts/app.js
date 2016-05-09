var app = angular.module('pirates', ['ngRoute'])
.controller('PiratesController', function($scope, $http, $log){
  $scope.vm = {};
  $scope.vm.number = 2;
})
.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pirates.html',
      })
});
