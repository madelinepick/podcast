var app = angular.module('pirates', [])
.controller('PiratesController', function($scope, $http, $log){
  $scope.vm = {};
  $scope.vm.number = 2;
})
