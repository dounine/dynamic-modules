var app = angular.module('app', [
    'indexSerModule'
]);
app.controller('indexCtrl', ['indexSer', function (indexSer) {
    console.info('indexCtrl');
}]);

