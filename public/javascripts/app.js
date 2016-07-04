angular.module('podcast', ['ngRoute', 'ngAnimate'])
.controller('PodcastController', function($rootScope, $route, $scope, $http, $log, PodcastService, $routeParams){
  $scope.vm = {};
  $scope.vm.podcasts = [];
  $rootScope.podcast = {};

//   $log.info('outside', $routeParams)
//
//
//   $scope.$on('$routeChangeStart', function(next, current) {
//     $log.info('next', next)
//     $log.info($routeParams)
//     PodcastService.onePodcast(next.targetScope.$id).then(function(podcast){
//     $scope.vm.podcast = podcast;
//   })
// })

  $scope.addPodcasts = function(date){
    PodcastService.addPodcasts(date).then(function(data){
      data.data.forEach(function(podcast){
        $scope.vm.podcasts.push(podcast)
      })
      $('body').animate({
        scrollTop: $(".morePodcasts").offset().top
      }, 1000);
    })
  };

  $scope.createPodcast = function(podcast){
    PodcastService.createPodcast(podcast).then(function(data){
      PodcastService.all().then(function(results){$scope.vm.podcasts = results.data});
    })
  };


  $scope.popup = function(podcast){
    PodcastService.popup(podcast)
  }

  PodcastService.all().then(function(results){$scope.vm.podcasts = results.data});

})

.controller('PopupController', function($rootScope, $route, $scope, $http, $log, PodcastService, $routeParams){
  $scope.vm.podcast = {};
  $scope.vm.podcast = PodcastService.singlePodcast($routeParams.id).$$state;
})

.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'PodcastController'
      })
      .when('/podcasts', {
        templateUrl: 'views/podcasts.html',
        controller: 'PodcastController'
      })
      .when('/podcasts/', {
        templateUrl: 'views/podcasts.html',
        controller: 'PodcastController'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'PodcastController'
      })
      .when('/:id', {
        templateUrl: 'views/podcast.html',
        controller: 'PopupController'
      })
      .otherwise({ redirectTo: '/' });
});
