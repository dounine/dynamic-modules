var app = angular.module('userCommonModule', [
    {
        files: ['root/user/common/_res/js/service.js']
    }
]);

app.controller('userCommonCtrl', function ($scope,$state,userCommonSer) {
    var vm = $scope;
    vm.moduleName = '这是Common用户页面';
    if($state.current.url=='/common[1]'){
         $state.go('root.user.common[1].common-child[1]');
    }
});