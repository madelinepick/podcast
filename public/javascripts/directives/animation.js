angular.module('podcast')
  .directive('cmTyped', function () {
      return {
        link: function (scope, element) {
          $(element).typed({
            strings: ["Welcome to Chameleon, <br> the podcast.", "Sit back, relax, and listen."],
            typeSpeed: 0,
            });
        }
      }
  })
