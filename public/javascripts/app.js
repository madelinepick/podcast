angular.module('podcast', ['ngRoute'])
.controller('PodcastController', function($scope, $http, $log, PodcastService){
  $scope.vm = {};
  $scope.vm.podcasts = {};
  $scope.addPodcasts = function(date){
    PodcastService.addPodcasts(date).then(function(data){
      $log.info('data', data)
      $scope.vm.podcasts.push(data.data[0]);
    })
  };
  $scope.createPodcast = function(podcast){
    PodcastService.createPodcast(podcast).then(function(data){
      PodcastService.all().then(function(results){$scope.vm.podcasts = results.data});
    })
  };
  PodcastService.all().then(function(results){$scope.vm.podcasts = results.data});
})
.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
      })
      .when('/podcasts', {
        templateUrl: 'views/podcasts.html',
      })
      .when('/add', {
        templateUrl: 'views/add.html',
      })
});
