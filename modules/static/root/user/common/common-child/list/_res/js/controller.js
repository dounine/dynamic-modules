var app = angular.module('userCommonCommonChildListModule', []);
app.controller('userCommonCommonChildListCtrl', function ($scope) {
    var vm = $scope;
    vm.list = function () {
        console.info('controller 方法调用');
    };
});