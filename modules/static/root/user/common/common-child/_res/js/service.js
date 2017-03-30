var app = angular.module('userCommonCommonChildModule');
app.factory('userCommonCommonChildSer',function () {
    return {
        testMethod : function () {
            console.info('userCommon子测试方法');
        }
    };
});