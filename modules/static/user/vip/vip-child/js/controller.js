var app = angular.module('userVipVipChildModule', [
    {
        files: ['/user/vip/vip-child/js/service.js']
    }
]);
app.controller('userVipVipChildCtrl', ['$scope','userVipVipChildSer', function ($scope,userVipVipChildSer) {
    $scope.moduleName = '这是VIP子级页面';
}]).controller('userVipVipChildListCtrl', ['$scope', function ($scope) {
    console.info('list1');
}]);