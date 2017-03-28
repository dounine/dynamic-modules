var app = angular.module('userVipModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("index.user.vip[1]", {
        url: "/vip[1]",
        views: {
            "content@index.user": {
                templateUrl: "user/vip/html/index.html",
                controller: "userVipCtrl"
            }
        }
    });
});