var app = angular.module('userVipModule', [
    {
        files: ['/user/vip/js/service.js']
    }
]);
app.controller('userVipCtrl', function ($scope,userVipSer) {
    var vm = $scope;
    vm.moduleName = '这是VIP用户页面';
});