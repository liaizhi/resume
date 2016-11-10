var Swiper = require("./components/swiper/swiper-3.3.1.min");
var SwiperAnimate = require("./components/swiper/swiper.animate1.0.2.min");
//console.log(Swiper);
        //动画
var swiper=new Swiper(".swiper-container", {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    SwiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    SwiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    SwiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  })   
  var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');

module.exports = $;
$(".swiper-container").show();
$("#IScroll").hide();
$("#enter").tap(function(){
	$(".swiper-container").hide();
$("#IScroll").show();
var IScroll = require("./components/iscroll/iscroll");
var myScroll;

	myScroll = new IScroll('#wrapper', { mouseWheel: true });

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	
})
var rem = require("./rem");