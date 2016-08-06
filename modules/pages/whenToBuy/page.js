/**
 * Created by zyc on 2016/6/11.
 */
define(function (require, exports, module) {
    var util = require("util");
    var baseDialogPage = require("baseDialogPage");
    var store = require("store");
    module.exports = Vue.extend({
        mixins: [baseDialogPage],
        title: "何时购买",
        template: __inline("./page.html"),
        data: function () {
            return {
                selectTime: store.selectTime,
                selectT: 1,
                item: {}
            }
        },
        ready: function () {
            var self = this;
        },
        attached: function () {
            this.selectT = this.params.selectT;
        },
        detached: function () {

        },
        methods: {
            select: function (key) {
                var self = this;
                if (key)self.selectT = key;
                self.params.ok(self.selectT);//调用函数
            }
        }
    });
});
