var app = angular.module('app',['ngCookies', 'ui.bootstrap'],
 // Change interpolation symbols
 function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

app.config(['$httpProvider', function($httpProvider) {
    // Change content type for POST so Django gets correct request object
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // 2 reasons: Allows request.is_ajax() method to work in Django
    // Also, so 500 errors are returned in responses (for debugging)
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]).run(['$http','$cookies',function($http, $cookies) {
        // Handles the CSRF token for POST
        $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
}]);