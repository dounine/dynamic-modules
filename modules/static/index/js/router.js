var app = angular.module('app');
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("index", {
        url: "/index",
        views: {
            "": {
                templateUrl: "index/html/content.html",
                controller: "indexCtrl"
            },"header@index": {
                templateUrl: "index/html/header.html"
            },"footer@index": {
                templateUrl: "index/html/footer.html"
            }
        }
    })
});