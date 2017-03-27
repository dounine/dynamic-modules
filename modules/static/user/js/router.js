var app = angular.module('userModule',[]);
app.config(['$provide', '$stateProvider', function ($provide, $stateProvider) {
    $stateProvider.state("index.user", {
        url: "/user",
        views: {
            "content@index": {
                templateUrl: "user/html/index.html",
                controller: "userCtrl"
            }
        }
    })
}]);