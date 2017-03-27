var app = angular.module('indexModule', [
    'indexSerModule'
]);
app.controller('indexCtrl', ['indexSer', function (indexSer) {
    console.info('indexCtrl');
}]);