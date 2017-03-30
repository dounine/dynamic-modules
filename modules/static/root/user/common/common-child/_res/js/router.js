var app = angular.module('userCommonCommonChildModule', []);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.user.common[1].common-child[1]", {
        url: "/common-child[1]",
        views: {
            "content@root.user.common[1]": {
                templateUrl: "root/user/common/common-child/_res/html/index.html",
                controller: "userCommonCommonChildCtrl"
            },"menu@root.user.common[1].common-child[1]": {
                templateUrl: "root/user/common/common-child/_res/html/menu.html"
            }
        }
    }).state("root.user.common[1].common-child[1].list[12]", {
        url: "/list[12]",
        views: {
            "content@root.user.common[1].common-child[1]": {
                templateUrl: "root/user/common/common-child/list/_res/html/div.html",
                controller: "userCommonCommonChildListCtrl"
            }
        }
    }).state("root.user.common[1].common-child[1].add[12]", {
        url: "/add[12]",
        views: {
            "content@root.user.common[1].common-child[1]": {
                templateUrl: "root/user/common/common-child/add/_res/html/div.html"
            }
        }
    }).state("root.user.common[1].common-child[1].del[12]", {
        url: "/del[12]",
        views: {
            "content@root.user.common[1].common-child[1]": {
                templateUrl: "root/user/common/common-child/del/_res/html/div.html"
            }
        }
    });
});