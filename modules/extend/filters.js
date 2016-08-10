/**
 * Created by zyc on 2016/7/31.
 */

define(function (require, exports, module) {

    //自定义过滤器转换 全局方法
    //Vue.filter();


    Vue.filter('currencyDisplay', {
        // model -> view
        // 在更新 `<input>` 元素之前格式化值
        read: function (val) {
            return '$' + val.toFixed(2)
        },
        // view -> model
        // 在写回数据之前格式化值
        write: function (val, oldVal) {
            var number = +val.replace(/[^\d.]/g, '');
            return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
        }
    });

    Vue.filter("cityCodeToName", function (code) {

        var util = require("util");
        var $xml = util.city.getAreaXmlData();
        var $node = $xml.find("[code='{0}']".format(code));
        if ($node.length > 0) {
            return $node.attr("name");
        }
        return "";
    });


});