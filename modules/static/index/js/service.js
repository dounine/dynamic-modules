var app = angular.module('indexModule',[]);
app.factory('indexSer',function () {
    console.info('indexSer');
    return {
        testMethod : function () {
            console.info('测试方法')
        }
    };
});