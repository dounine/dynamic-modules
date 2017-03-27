const app = require('koa')();//koa web应用
const path = require('path');//路径
const router = require("koa-router")();//路由中间件
const session = require('koa-session');//cookie
const koaBody = require('koa-body');
const staticCache = require('koa-static-cache');
const routersPath = '/modules/node/';
const sendfile = require('koa-sendfile');
const port = 8888;

app.keys = ['issp-node'];//session加密值
app.use(session(app));//使用cookie
app.use(koaBody());//必需要路由用之前使用,不然获取不到表单
router.get('/', function *(next) {//根路由
    var status = yield (sendfile(this, path.resolve('modules/static/index/html/index.html')));
    if (!status) {
        this.throw(404);
    }
});

//============路由===========
// app.use(require(path.join(__dirname,routersPath,'index/router/index.js'))().routes());//登录路由

app.use(router.routes());

//============静态文件资源===========
app.use(staticCache(path.join(__dirname, 'modules/static'), {
    maxAge: 365 * 24 * 60 * 60
}))

app.use(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.listen(port, function () {
    console.log('koa server listening on port ' + port);
});