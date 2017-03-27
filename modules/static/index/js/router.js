var app = angular.module('app');
app.config(['$provide', '$stateProvider', function ($provide, $stateProvider) {
    console.info('indexRouter')
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