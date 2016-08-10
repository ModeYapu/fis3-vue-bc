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
                provinceList: [],//所有省数据
                provinceIndex: 0,//当前选择省的索引
                cityIndex: -1//当前选择城市的索引
            }
        },
        ready: function () {
            var self = this;
            var areaData = util.city.getAreaJsonData();
            self.provinceList = areaData.china.province;
        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            selectProvince: function (index) {
                this.provinceIndex = index;
            },
            selectCity: function (index, city) {
                var self = this;
                self.cityIndex = index;
                setTimeout(function () {
                    self.hideDialog();
                    self.params.ok(city.code);
                }, 300);
            }
        }
    });
});
