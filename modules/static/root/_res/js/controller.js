var app = angular.module('app', [
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,$state,rootSer) {
    $scope.moduleName = '这是首页';
    if($state.current.url=='/root'){
        $state.go('root.user');
    }
});

