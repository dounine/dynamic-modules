var app = angular.module('userModule', [
    {
        files: ['/user/js/service.js']
    }
]);
app.controller('userCtrl', ['$scope','userSer', function ($scope,userSer) {
    $scope.moduleName = '这是用户模块页面';
}]);