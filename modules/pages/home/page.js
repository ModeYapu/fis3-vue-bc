/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    var store = require("store");
    module.exports = Vue.extend({
        mixins: [basePage],
        title: "首页",
        template: __inline("./page.html"),
        data: function () {
            return {
                list: {},
                selectIndex: -1,
                brandSelect: store.brandSelect,
                searchShowIndex: -1,
                searchData: [
                    {
                        id: "carType",
                        title: "车型",
                        items: ["全部", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板"]
                    },
                    {
                        id: "brand",
                        title: "品牌",
                        items: ["全部", "奔驰", "沃尔沃", "北京牌", "达夫/DAF", "联合重卡", "北汽"]
                    },
                    {
                        id: "dongli",
                        title: "动力",
                        items: ["全部", "平板", "高栏", "平板2", "高栏", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板", "高栏", "平板"]
                    },
                    {
                        id: "province",
                        title: "省份",
                        items: ["广东", "上海", "北京", "天津", "河北", "河南", "江苏", "湖北", "湖南", "安徽", "杭州", "山东", "甘肃", "山西", "内蒙古", "西藏"]
                    }
                ],
                search:{
                    carType:"",
                    brand:"",
                    dongli:"",
                    province:""
                }
            }
        },
        ready: function () {
            var self = this;
            self.searchList();
        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            searchList:function(){
                var self = this;
                util.ajaxRequest({
                    url: "car/carList",
                    data: {
                        page: 1,
                        carType:self.search.carType,
                        brand:self.search.brand,
                        dongli:self.search.dongli,
                        province:self.search.province
                    },
                    success: function (d) {
                        self.list = d.data;
                    }
                });
            },
            showMsg: function () {
               // item.id = index;
                this.showPage("pages/detail", '1230');
                //this.selectIndex = index;
            },
            showSearchContent: function (item, index) {
                if (this.searchShowIndex == index) {
                    this.searchShowIndex = -1;
                } else {
                    this.searchShowIndex = index
                }
            },
            selectSearchTag: function (item, tag) {
                this.searchShowIndex = -1;
                this.search[item.id] = tag;
                this.searchList();
            }

        }
    });
});

