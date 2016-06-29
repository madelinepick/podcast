angular.module('podcast', ['ngRoute'])
.controller('PodcastController', function($scope, $http, $log, PodcastService){
  $scope.vm = {};
  $scope.vm.number = 2;
  $scope.vm.pirates = {};
  $scope.createPirate = function(pirate){
    PiratesService.createPirate(pirate).then(function(data){
      PiratesService.all().then(function(results){$scope.vm.pirates = results.data});
    });
  }

  PodcastService.all().then(function(results){$scope.vm.pirates = results.data});
})
.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
      })
      .when('/podcasts', {
        templateUrl: 'views/podcasts.html',
      })
});
