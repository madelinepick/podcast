angular.module('podcast')
.factory('PodcastService', function ($http, $log) {
  return {
    all: function() {
      return $http.get('/api/podcasts');
    },
    createPodcast: function(podcast){
      return $http.post('/api/podcasts', podcast).then(function (data){
        return data.data
      })
    },
    addPodcasts: function(date){
      return $http.get('/api/podcasts/more/'+date);
    }
  }
})
