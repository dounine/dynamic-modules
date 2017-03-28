var app = angular.module('app');
app.config(function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'indexSerModule',
                files: ['/index/js/service.js']
            }
        ]
    });
});