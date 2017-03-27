var app = angular.module('indexModule', [
    {
        files: ['/index/js/service.js']
    }
]);
app.controller('indexCtrl', ['indexSer', function (indexSer) {
    console.info('indexCtrl')
}]);