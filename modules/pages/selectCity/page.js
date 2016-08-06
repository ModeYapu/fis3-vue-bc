/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var baseDialogPage = require("baseDialogPage");
    module.exports = Vue.extend({
        mixins: [baseDialogPage],
        title: "选择城市",
        template: __inline("./page.html"),
        data: function () {
            return {
                cityCode: "100001",
                cityList:[]
            }
        },
        ready: function () {
            var self = this;
            var store = require("store");
            this.cityList = store.cityData;
        },
        attached: function () {
            this.cityCode = this.params.city;
        },
        detached: function () {

        },
        methods: {
            select: function (city) {
                var self = this;
                this.params.ok(city.code);
                this.hideDialog();
            }
        }
    });
});
