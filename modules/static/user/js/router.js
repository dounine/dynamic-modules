var app = angular.module('userModule',[]);
app.config(['$provide', '$stateProvider', function ($provide, $stateProvider) {
    console.info('router')
    $stateProvider.state("user", {
        url: "/user",
        views: {
            "": {
                templateUrl: "user/html/index.html",
                controller: "userCtrl"
            }
        }
    })
}]);