var app = angular.module('userVipVipChildModule', [
    {
        files: ['root/user/vip/vip-child/_res/js/service.js']
    }
]);
app.controller('userVipVipChildCtrl', function ($scope, $state,$location, userVipVipChildSer) {
    'ngInject';
    var vm = $scope;
    vm.moduleName = '这是VIP子级页面';
    vm.click = function () {
        // $state.go('root.user.vip[1].vip-child[1].list[12]');
        // console.info($state.current.url)
    }
    if ($state.current.url == '/vip-child[1]') {//默认加载列表
        $state.go('root.user.vip[1].vip-child[1].list[12]');
    }
});