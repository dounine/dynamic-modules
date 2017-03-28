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
    }).state("index.user.vip[1].vip-child.list[12]", {
        url: "/list[12]",
        views: {
            "content@index.user.vip[1].vip-child": {
                templateUrl: "user/vip/vip-child/list/html/div.html",
                controller: "userVipVipChildListCtrl"
            }
        }
    }).state("index.user.vip[1].vip-child.add[12]", {
        url: "/add[12]",
        views: {
            "content@index.user.vip[1].vip-child": {
                templateUrl: "user/vip/vip-child/add/html/div.html"
            }
        }
    }).state("index.user.vip[1].vip-child.del[12]", {
        url: "/del[12]",
        views: {
            "content@index.user.vip[1].vip-child": {
                templateUrl: "user/vip/vip-child/del/html/div.html"
            }
        }
    });
}]);