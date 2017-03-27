var app = angular.module('indexModule',[]);
app.config(['$provide','$ocLazyLoadProvider', function ($provide,$ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'indexSerModule',
                files: ['/index/js/service.js']
            }
        ]
    });
}]);