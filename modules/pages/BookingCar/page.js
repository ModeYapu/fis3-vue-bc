/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    var store=require("store");
    module.exports = Vue.extend({
        mixins: [basePage],
        title: "",
        template: __inline("./page.html"),
        data: function () {
            return {
                list: [],
                selectT:1,
                item:{}
            }
        },
        filters: {
            selectTimeFormat:function(value){
                return store.selectTime[value];
            }
        },
        ready: function () {
            var self = this;
        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            selectime: function () {
                var self = this;
                this.showDialog("pages/whenToBuy", {
                    selectT:self.selectT,
                    ok:function(newKey){
                        self.selectT = newKey;
                    }
                }, "top");
            }
        }
    });
});
