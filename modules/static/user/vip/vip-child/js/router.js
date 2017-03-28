var app = angular.module('userVipVipChildModule',[]);
app.config(['$provide', '$stateProvider', function ($provide, $stateProvider) {
    $stateProvider.state("index.user.vip[1].vip-child", {
        url: "/vip-child",
        views: {
            "content@index.user": {
                templateUrl: "user/vip/vip-child/html/index.html",
                controller: "userVipVipChildCtrl"
            }
        }
    }).state("index.user.vip[1].vip-child.div[12]", {
        url: "/div[12]",
        views: {
            "content@index.user.vip[1].vip-child": {
                templateUrl: "user/vip/vip-child/html/div.html"
            }
        }
    });
}]);