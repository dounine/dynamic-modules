var app = angular.module('app', [
    'indexSerModule'
]);
app.controller('indexCtrl', function ($scope,indexSer) {
    $scope.moduleName = '这是首页';
});

