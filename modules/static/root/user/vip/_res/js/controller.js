var app = angular.module('userVipModule', [
    {
        files: ['root/user/vip/_res/js/service.js']
    }
]);
app.controller('userVipCtrl', function ($scope,$state,userVipSer) {
    var vm = $scope;
    vm.moduleName = '这是VIP用户页面';
    if($state.current.url=='/vip[1]'){
         $state.go('root.user.vip[1].vip-child[1]');
    }
});