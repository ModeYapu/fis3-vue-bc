/**
 * Created by zyc on 2016/6/11.
 */
define(function (require, exports, module) {
    var util = require("util");
    module.exports = Vue.component('c-header', Vue.extend({
        template: __inline("./page.html"),
        data: function () {
            return {
                msg: 'hello'
            }
        },
        ready: function () {

        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {

        }
    }));
});
