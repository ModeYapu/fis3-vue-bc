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
                cityIndex: -1,//当前选择城市的索引
                cityCode: ""
            }
        },
        ready: function () {
            var self = this;
            var areaData = util.city.getAreaJsonData();
            self.provinceList = areaData.china.province;
            this.cityCode = this.params.cityCode + "";
            this.defaultSelect();
        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            defaultSelect: function () {
                var self = this;
                if (self.provinceList && self.provinceList.length) {
                    var pcode = self.cityCode.substring(0, 2) + "0000";
                    for (var i = 0; i < self.provinceList.length; i++) {
                        var pitem = self.provinceList[i];
                        if (pcode == pitem.code){
                            self.provinceIndex = i;
                            for (var j = 0; j < pitem.city.length; j++) {
                                if (pitem.city[j].code == self.cityCode) {
                                    self.cityIndex = j;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            ,
            selectProvince: function (index) {
                this.provinceIndex = index;
            }
            ,
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
})
;
