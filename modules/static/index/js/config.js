var app = angular.module('indexModule',[]);
app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'indexSerModule',
                files: ['/index/js/service.js']
            }
        ]
    });
}]);