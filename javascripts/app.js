angular.module('app', [])
  .controller('Main', function() {})
  .directive('randomGif', function($http) {
    return {
      restrict: 'E',
      template: '<img data-ng-src="{{src}}" />',
      link: function(scope, element, attrs) {
        var ok = function(response) {
              scope.src = response.data.data.image_url;
            },
            whoops = function() {
              scope.src = '/images/blank.gif';
            };

        $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
          .then(ok, whoops);
      }
    };
  });
