var app = angular.module('app', [
    'indexSerModule'
]);
app.controller('rootCtrl', function ($scope,rootSer) {
    $scope.moduleName = '这是首页';
});

