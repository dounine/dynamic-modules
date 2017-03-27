var app = angular.module('userModule');
app.factory('userSer',function () {
    console.info('userSer')
    return {
        testMethod : function () {
            console.info('user测试方法')
        }
    };
});