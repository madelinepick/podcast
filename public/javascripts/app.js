angular.module('podcast', ['ngRoute', 'ngAnimate'])
.controller('PodcastController', function($rootScope, $route, $scope, $http, $log, PodcastService, $routeParams){
  $scope.showmodal = false;
  $scope.vm = {};
  $scope.vm.podcasts = [];
  $scope.vm.list = [];
  $rootScope.podcast = {};
  $scope.vm.message = '';

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
      PodcastService.all().then(function(results){
        $scope.vm.podcasts = results.data;
        $scope.vm.message = 'You added a podcast!';
        $log.info($scope.vm.message)
      });
      window.location.reload(false);
    })
  };
  $scope.deletePodcast = function(id){
    PodcastService.deletePodcast(id).then(function(data){
      window.location.reload(false);
    })
  };


  $scope.popup = function(podcast){
    PodcastService.popup(podcast)
  }

  $scope.toggleModal = function(){
    $scope.showmodal == true ? ($scope.showmodal = false) : ($scope.showmodal = true);
    $scope.email = null;
  }

  $scope.share = function(id){
    window.open('https://www.facebook.com/dialog/share?app_id=652077588290773&display=popup&href=https%3A%2F%2Fchameleon-the-podcast.herokuapp.com%2F'+id+'%2F&redirect_uri=https%3A%2F%2Fchameleon-the-podcast.herokuapp.com%2F');

  }

  PodcastService.all().then(function(results){$scope.vm.podcasts = results.data});
  PodcastService.listPodcasts().then(function(results){
    $scope.vm.list = results});

})

.controller('PopupController', function($rootScope, $route, $scope, $http, $log, PodcastService, $routeParams){
  $scope.vm.podcast = {};
  $scope.vm.podcast = PodcastService.singlePodcast($routeParams.id).$$state;
})

.config(function($routeProvider, $locationProvider) {

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
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'PodcastController'
      })
      .when('/:id', {
        templateUrl: 'views/podcast.html',
        controller: 'PopupController'
      })
      .otherwise({ redirectTo: '/' });
      $locationProvider.html5Mode(true);
});
