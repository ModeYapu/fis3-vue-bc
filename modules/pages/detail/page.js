

/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    module.exports = Vue.extend({
        title: "详情",
        mixins: [basePage],
        template: __inline("./page.html"),
        data: function () {
            return {
                bannerList:[]
            }
        },

        ready: function () {
            var self=this;
            util.ajaxRequest({
                url: "services/getBannerList",
                success: function (d) {
                    self.bannerList = d.data;
                    Vue.nextTick(function () {
                        self.iSliderInit();
                    });
                }
            });
        },
        attached: function () {
            util.logger.log(this.title + " 進入,參數", this.params);

        },
        detached: function () {

        },
        methods: {
            iSliderInit: function () {
                var self = this;
                var list = $.map(self.bannerList, function (url) {
                    return {content: url};
                });
                var slider = new iSlider({
                    dom: self.$el.getElementsByClassName("iSlider-wrapper")[0],
                    data: list,
                    isLooping: 1,
                    isOverspread: 1,
                    animateTime: 800,
                    plugins: ['dot']
                });

            },
            showSelectCity: function () {
                var self = this;
                this.showDialog("pages/selectCity", {
                    city: self.cityCode,
                    ok: function (newCity) {
                        self.cityCode = newCity;
                    }
                }, "bottom");
            }

        }
    });
});
