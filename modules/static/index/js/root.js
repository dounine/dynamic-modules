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
        var modules = moduleName.substring(1).split('/');
        var prefixModules = [];
        modules.forEach(function (module) {
            prefixModules.push(module);
            loadModule($ocLazyLoad, $urlRouter, prefixModules.join('/'));//加载模块
            if (module == 'index') {
                prefixModules.shift(1);//去掉入口模块拼接
            }
        });
    });
});

function loadModule($ocLazyLoad, $urlRouter, moduleName, fun) {
    moduleName = moduleName[0] != '/' ? ('/' + moduleName) : moduleName
    $ocLazyLoad.load('/module/_config' + moduleName + '.js').then(function () {
        $ocLazyLoad.load(moduleName + "/js/router.js").then(function () {
            $ocLazyLoad.load(moduleName + '/js/controller.js').then(function () {
                $urlRouter.sync();
                if (fun) {
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
            if (uiRouter.self) {//刷新进来
                var name = uiRouter.self.name;
                if (name != 'index') {
                    name = name.replace('index.', '');
                    name = '/' + name.split('.').join('/');
                }
                $ocLazyLoad.load([name + '/js/controller.js']).then(function () {
                    state.transitionTo.apply(null, args);
                });
            } else {// ui-sref 点击进来
                if (uiRouter[0] == '.') {//判断是否有相对路径 .user
                    var sname = args[2].relative.self.name;
                    var snames = sname.split('.');
                    var uiRouters = uiRouter.substring(1).split('.');
                    if (uiRouters[0] == snames[snames.length - 1]) {//
                        uiRouters.shift(1);
                        uiRouter = (sname + '.' + uiRouters.join('.'));
                    } else {
                        uiRouter = sname.substring(0, sname.indexOf(uiRouter)) + uiRouter;
                    }
                }
                var path = (uiRouter.indexOf('index.') == 0) ? uiRouter.replace('index.', '') : uiRouter;
                loadModule($ocLazyLoad, $urlRouter, path.split('.').join('/'), function () {
                    state.transitionTo.apply(null, args);
                });
            }
        }
        return $delegate;
    });

}]);