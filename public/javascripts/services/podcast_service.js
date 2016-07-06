angular.module('podcast')
.factory('PodcastService', function ($rootScope, $http, $log) {
  return {
    all: function() {
      return $http.get('/api/podcasts');
    },
    popup: function(podcast){
      $rootScope.podcast = podcast;
	       newWindow=window.open(podcast.id,'name','height=530,width=500');
	        if (window.focus) {newWindow.focus()}
	         return false;
    },
    createPodcast: function(podcast){
      return $http.post('/api/podcasts', podcast).then(function (data){
        return data.data
      })
    },
    deletePodcast: function(id){
      return $http.post('/api/podcasts/delete', id).then(function (data){
        return data.data
      })
    },
    listPodcasts: function(){
      return $http.get('/api/podcasts/list').then(function (data){
        return data.data
      })
    },
    addPodcasts: function(date){
      return $http.get('/api/podcasts/more/'+date);
    },
    singlePodcast: function(id){
      return $http.get('/api/podcasts/'+id);
    }
  }
})
