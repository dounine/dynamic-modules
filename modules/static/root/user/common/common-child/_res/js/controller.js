var app = angular.module('userCommonCommonChildModule', [
    {
        files: ['root/user/common/common-child/_res/js/service.js']
    }
]);
app.controller('userCommonCommonChildCtrl', function ($scope, $state,$location, userCommonCommonChildSer) {
    var vm = $scope;
    vm.moduleName = '这是common子级页面';
    if ($state.current.url == '/common-child[1]') {//默认加载列表
        $state.go('root.user.common[1].common-child[1].list[12]');
    }
});