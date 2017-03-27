var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);
app.controller('root', function ($rootScope, $urlRouter, $ocLazyLoad, $location) {
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if (!$location.path()) {
            $location.path('/index');
        } else {
            if ($location.path() == '/index/') {
                $location.path('/index');
            }
        }
        var moduleName = $location.path();
        if ($location.path().indexOf('/index/') == 0) {
            moduleName = $location.path().replace('/index', '');
            loadModule($ocLazyLoad, $urlRouter, '/index');//加载入口模块
        }
        loadModule($ocLazyLoad, $urlRouter, moduleName);//加载子模块
    });
});

function loadModule($ocLazyLoad, $urlRouter, moduleName, fun) {
    moduleName = moduleName.replace('.', '/');
    moduleName = moduleName[0] != '/' ? ('/' + moduleName) : moduleName
    $ocLazyLoad.load('/module/_config' + moduleName + '.js').then(function () {
        $ocLazyLoad.load(moduleName + "/js/router.js").then(function () {
            $ocLazyLoad.load(moduleName + '/js/controller.js').then(function () {
                $urlRouter.sync();
                if(fun){
                    fun();
                }
            });
        });
    });
}


app.config(['$provide', '$urlRouterProvider', function ($provide, $urlRouterProvider) {
    $urlRouterProvider.deferIntercept();
    $provide.decorator('$state', function ($delegate, $ocLazyLoad, $urlRouter) {//ui-router 渲染
        var state = {};
        angular.copy($delegate, state);
        $delegate.transitionTo = function (uiRouter) {
            var args = arguments;
            var uiRouter = args[0];
            if (uiRouter.self) {
                $ocLazyLoad.load([uiRouter.self.url + '/js/controller.js']).then(function () {
                    state.transitionTo.apply(null, args);
                });
            } else {
                var path = (uiRouter.indexOf('index.') == 0) ? uiRouter.substring(6) : uiRouter;
                loadModule($ocLazyLoad, $urlRouter, path, function () {
                    state.transitionTo.apply(null, args);
                });
            }
        }
        return $delegate;
    });

}]);