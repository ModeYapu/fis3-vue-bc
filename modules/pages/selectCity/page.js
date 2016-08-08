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
                cityData:[
                    {
                        id:"shanghai",
                        title:"上海",
                        items:["徐汇","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇"]
                    },
                    {
                        id:"beijing",
                        title:"北京",
                        items:["徐汇","松江","闵行","徐汇","徐汇"]
                    },
                    {
                        id:"jiangsu",
                        title:"江苏",
                        items:["南京","无锡","徐州","苏州","泰州","宿迁","淮安","连云港","盐城"]
                    },
                    {
                        id:"hubei",
                        title:"湖北",
                        items:["徐汇","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇"]
                    },
                    {
                        id:"jiangxi",
                        title:"江西",
                        items:["徐汇","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇",]
                    },
                    {
                        id:"hunan",
                        title:"湖南",
                        items:["长沙","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇",]
                    },{
                        id:"sichuan",
                        title:"四川",
                        items:["成都","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇",]
                    },
                    {
                        id:"yunnan",
                        title:"云南",
                        items:["昆明","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇",]
                    },{
                        id:"guangdong",
                        title:"广东",
                        items:["广州","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇",]
                    },
                    {
                        id:"anhuei",
                        title:"安徽",
                        items:["合肥","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇",]
                    },{
                        id:"shandong",
                        title:"山东",
                        items:["济南","松江","闵行","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇","徐汇",]
                    }
                ],
                cityShowIndex:1,
                search:{
                    shanghai:"",
                    beijing:"",
                    jiangsu:"",
                    hubei:"",
                    hunan:"",
                    sichuan:"",
                    yunnan:"",
                    guangdong:"",
                    anhuei:"",
                    shandong:""
                },
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
                    url: "",
                    data: {
                        page: 1,
                        shanghai:self.search.shanghai,
                        beijing:self.search.beijing,
                        jiangsu:self.search.jiangsu,
                        hubei:self.search.hubei,
                        hunan:self.search.hunan,
                        sichuan:self.search.sichuan,
                        yunnan:self.search.yunnan,
                        guangdong:self.search.guangdong,
                        anhuei:self.search.anhuei,
                        shandong:self.search.shandong
                    },
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
