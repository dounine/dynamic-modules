var app = angular.module('userVipVipChildModule', [
    {
        files: ['/user/vip/vip-child/js/service.js']
    }
]);
app.controller('userVipVipChildCtrl', function ($scope, userVipVipChildSer) {
    'ngInject';
    var vm = $scope;
    vm.moduleName = '这是VIP子级页面';

}).controller('userVipVipChildListCtrl', function ($scope) {
    var vm = $scope;
    vm.list = function () {
        alert();
    }
    console.info('list1');
});