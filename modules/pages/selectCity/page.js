/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    module.exports = Vue.extend({
        mixins: [basePage],
        title: "选择城市",
        template: __inline("./page.html"),
        data: function () {
            return {}
        },
        ready: function () {
            var self = this;
        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {

        }
    });
});
