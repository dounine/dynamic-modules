var app = angular.module('indexModule',[]);
app.factory('indexSer',function () {
    return {
        testMethod : function () {
            console.info('测试方法')
        }
    };
});