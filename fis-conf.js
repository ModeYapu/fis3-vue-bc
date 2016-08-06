/**
 * Created by zyc on 2016/6/27.
 */
//设置不打包文件
fis.set('project.ignore', ["\..*", '.git/**', "README.md", "package.json", "npm-debug.log", 'fis-conf.js']);

//加载loader插件
fis.match('::packager', {
    postpackager: fis.plugin('loader')
});

fis.match('*.scss', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('node-sass'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})

//加载方式 cmd同步加载  amd异步加载
fis.hook('cmd');

//公用部分
var commCss = [
    '/static/css/comm.css',
    '/node_modules/islider.js/build/iSlider.css',
    '/modules/**.css',
    '/modules/**.scss'
];
var commJs = [
    "/static/js/sea.js",
    "/static/config/config.js",
    "/static/config/seaJS-config.js",
    "/node_modules/vue/dist/vue.min.js",
    "/node_modules/zepto/dist/zepto.min.js",
    "/node_modules/islider.js/build/iSlider.min.js",
    "/node_modules/islider.js/build/iSlider.plugin.dot.min.js",
    "/node_modules/director/build/director.min.js",
    '/app.js'
];

//开发环境
fis.media("dev")
    .match('::packager', {
        packager: fis.plugin('map', {
            '/static/all.css': commCss,
            '/static/all.js': commJs.concat([
                '/static/**.js',
                //'/modules/**.js'
            ])
        })
    });

//线上环境
fis.media("prod")
    .match('::packager', {
        packager: fis.plugin('map', {
            '/static/all.css': commCss,
            '/static/all.js': commJs.concat([
                '/static/**.js',
                '/modules/**.js'
            ])
        })
    })
    //压缩js  css
    .match('**.js', {
        optimizer: fis.plugin('uglify-js', {
            drop_console: true
        })
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    })
    //添加版本号
    .match('*.{js,css}', {
        useHash: true
    });