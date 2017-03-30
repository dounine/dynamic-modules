var app = angular.module('userCommonModule');
app.factory('userCommonSer',function () {
    return {
        testMethod : function () {
            console.info('userCommon测试方法')
        }
    };
});