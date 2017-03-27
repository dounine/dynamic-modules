var app = angular.module('userModule', [
    {
        files: ['/user/js/service.js']
    }
]);
app.controller('userCtrl', ['userSer', function (userSer) {
    console.info('userCtrl')
}]);