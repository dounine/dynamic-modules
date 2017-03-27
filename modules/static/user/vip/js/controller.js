var app = angular.module('userVipModule', [
    {
        files: ['/user/vip/js/service.js']
    }
]);
app.controller('userVipCtrl', ['$scope','userVipSer', function ($scope,userVipSer) {
    $scope.moduleName = '这是VIP用户页面';
}]);