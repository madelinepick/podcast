angular.module('podcast', ['ngRoute', 'ngAnimate'])
.controller('PodcastController', function($scope, $http, $log, PodcastService){
  $scope.vm = {};
  $scope.vm.podcasts = {};
  $scope.addPodcasts = function(date){
    PodcastService.addPodcasts(date).then(function(data){
      data.data.forEach(function(podcast){
        $scope.vm.podcasts.push(podcast)
          $('html, body').animate({
            scrollTop: $(".morePodcasts").offset().top
        }, 1200);
      })
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
