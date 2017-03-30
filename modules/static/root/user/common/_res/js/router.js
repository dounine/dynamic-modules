var app = angular.module('userCommonModule',[]);
app.config(function ($stateProvider) {
    $stateProvider.state("root.user.common[1]", {
        url: "/common[1]",
        views: {
            "content@root.user": {
                templateUrl: "root/user/common/_res/html/index.html",
                controller: "userCommonCtrl"
            }
        }
    });
});