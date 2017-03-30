var app = angular.module('userModule', [
    {
        files: ['root/user/_res/js/service.js']
    }
]);
app.controller('userCtrl',function ($scope,$state,userSer) {
    $scope.moduleName = '这是用户模块页面';
    if($state.current.url=='/user'){
        $state.go('root.user.vip[1]');
    }
});