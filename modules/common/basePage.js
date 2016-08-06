///**
// * Created by zyc on 2016/6/20.
// * base页面模块
// */
define(function (require, exports, module) {
    var util = require("util");
    module.exports = Vue.extend({
        title: "",
        props: [],
        data: function () {

        },
        ready: function () {
            util.logger.log(this.$options.title, "，初始化完成");
        },
        attached: function () {
            //设置参数
            if (this.$parent.currentDialogView) {
                this.params = this.$parent.dialogPageParams;
            } else {
                this.params = this.$parent.pageParams;
            }
            util.logger.log(this.$options.title, "，进入");
        },
        detached: function () {
            util.logger.log(this.$options.title, "，离开");
        },

        methods: {
            //跳转页面
            showPage: function (url, param) {
                this.$parent.showPage(url, param);
            },
            /**
             * 加載彈出框页面
             * @url 模块path 例如pages/page3
             * @data 参数
             * @position 弹出框口位置，枚举值：center、top、bottom .默认为center
             */
            showDialog: function (url, data, position) {
                this.$parent.showDialog(url, data, position);
            },
        }
    })
    ;
});