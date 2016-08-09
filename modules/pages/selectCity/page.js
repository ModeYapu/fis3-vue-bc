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
            return {
                cityShowIndex:1,
                currentCityTag:""
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
            searchList:function(){
                var self = this;
                util.ajaxRequest({
                    dataType:"json",
                    url: "data.area.json",
                    success: function (d) {
                        self.list = d.data;
                    }
                });
            },
            showCityContent: function (item, index) {
                if (this.cityShowIndex == index) {
                    this.cityShowIndex = -1;
                } else {
                    this.cityShowIndex = index;
                    this.currentCityTag =  this.search[item.id];
                }
            },
            selectCityTag:function(item,tag){
                var self = this;
                this.search[item.id] = tag;
                this.currentCityTag = tag;
            }
        }
    });
});
