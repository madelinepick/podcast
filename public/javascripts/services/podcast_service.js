angular.module('podcast')
.factory('PodcastService', function ($http, $log) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    createPirate: function(pirate){
      return $http.post('/api/pirates', pirate).then(function (data){
        return data.data
      })
    }
  }
})
