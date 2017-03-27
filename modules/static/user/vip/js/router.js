var app = angular.module('userVipModule',[]);
app.config(['$provide', '$stateProvider', function ($provide, $stateProvider) {
    $stateProvider.state("index.user.vip", {
        url: "/vip",
        views: {
            "content@index.user": {
                templateUrl: "user/vip/html/index.html",
                controller: "userVipCtrl"
            }
        }
    })
}]);