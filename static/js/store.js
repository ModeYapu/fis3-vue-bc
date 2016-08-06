/**
 * Created by zyc on 2016/7/15.
 */
define(function (require, exports, module) {

    //全局对象
    module.exports = {

        loginUser: {},
        //保险分类
        baoxianType: {
            1: "A保险",
            2: "B保险",
            3: "C保险"
        },
        //全国城市数据
        cityData: [
            {code: "100001", name: "北京", citys: []},
            {code: "100002", name: "上海", citys: []},
            {code: "100003", name: "深圳", citys: []},
            {code: "100004", name: "重庆", citys: []}
        ],
        //选择时间
        selectTime:{
            1:"一周内",
            2:"一个月内",
            3:"三个月内",
            4:"三个月以上"
        },
        //品牌
        brandSelect:{
            1:"全部",
            2:"奔驰",
            3:"沃尔沃",
            4:"北京牌",
            5:"达夫/DAF",
            6:"联合重卡",
            7:"北汽"
        }
    };

});