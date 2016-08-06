/**
 * Created by zyc on 2016/7/31.
 */

define(function (require, exports, module) {

    Vue.directive('validate-monty', {
        bind: function () {
            // 准备工作
            // 例如，添加事件处理器或只需要运行一次的高耗任务
            //var util = require("util");
            //var el = this.el;
            //$(el).on("input.prototype", function () {
            //    util.logger.log(this.value);
            //    var isNum=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
            //    if(!isNum.test(this.value.substr(1))){
            //        alert("输入格式不正确");
            //    }
            //});
        },
        update: function (newValue, oldValue) {
            // 值更新时的工作
            // 也会以初始值为参数调用一次

        },
        unbind: function () {
            // 清理工作
            // 例如，删除 bind() 添加的事件监听器
            var el = this.el;

        }
    });




});