/**
 * Created by zyc on 2016/6/27.
 */
// seajs 的简单配置
seajs.config({
    base: "/",
    paths:{

    },
    alias: {
        "config": "/static/config/config",
        "store": "/static/js/store",
        "util": "/static/js/comm",
        "basePage":'/modules/common/basePage',
        "baseDialogPage":'/modules/common/baseDialogPage'
    }
});