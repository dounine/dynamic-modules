var app = angular.module('indexModule',[]);
app.config(['$provide', '$stateProvider', function ($provide, $stateProvider) {
    console.info('router')
    $stateProvider.state("index", {
        url: "/index",
        views: {
            "": {
                templateUrl: "index/html/test.html",
                controller: "indexCtrl"
            }
        }
    })
}]);