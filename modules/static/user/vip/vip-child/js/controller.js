var app = angular.module('userVipVipChildModule', [
    {
        files: ['/user/vip/vip-child/js/service.js']
    }
]);
app.controller('userVipVipChildCtrl', ['$scope','userVipVipChildSer', function ($scope,userVipVipChildSer) {
    $scope.moduleName = '这是VIP子级页面';
}]);