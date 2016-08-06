///**
// * Created by zyc on 2016/6/20.
// * base页面模块
// */
define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    module.exports = Vue.extend({
        mixins: [basePage],
        data: function () {

        },
        ready: function () {
            util.logger.log(this.$options.title, "，初始化完成");
        },
        attached: function () {

            util.logger.log(this.$options.title, "，进入");

        },
        detached: function () {
            util.logger.log(this.$options.title, "，离开");
        },
        methods: {
            /**
             * 隐藏彈出框页面
             */
            hideDialog: function () {
                this.$parent.currentDialogView = "";
            }

        }
    })
    ;
});