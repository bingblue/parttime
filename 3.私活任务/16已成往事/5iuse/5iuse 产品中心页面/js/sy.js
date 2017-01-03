$(function () {
	  	cpqh();
	  	qh();
	  	dwdh();
})
function qh() {
	$(".navcenter .tan").bind("mouseover",function(){
		$(".navcenter ul").show();
	})
	$(".navcenter ul").bind("mouseleave",function(){
		$(".navcenter ul").css({"display":"none"});
	})
	$(".navcenter .sm").bind("click",function(){
		$(".navcenter ul").hide();
		// $(".warp").hide();
		// $(".bg").show();
		$(".navcenter .fl").css({"color":""});
		$(this).css({"color":"#00a0e9"});
		location.href="cp.html";
	})
	$(".navcenter .fl").bind("click",function(){
		$(".navcenter ul").hide();
		// $(".warp").show();
		// $(".bg").hide();
		$(".navcenter .sm").css({"color":""});
		$(this).css({"color":"#00a0e9"});
		location.href="index.html";
	})
}
function cpqh() {
	$(".cpfl .wxjc").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .wxjc").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"});
	})
	$(".cpfl .wxyx").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .wxyx").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"});
	})
	$(".cpfl .qxsz").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .qxsz").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"});
	})
	$(".cpfl .lhdy").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .lhdy").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"});
	})
	$(".cpfl .jyhy").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .jyhy").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"});
	})
	$(".cpfl .dshy").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .dshy").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"});
	})
	$(".cpfl .rcbg").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .rcbg").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"});
	})
	$(".cpfl h3").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(".cp li").css({"display":"inline-block"});
		$(this).css({"border-left":" 6px solid #29b0ff"});
	})
}
function dwdh(){
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		if(top>441){
			$(".bg .two").css({"margin-top":"124px"});
			$(".bg .two .h").css({"width":"182px"});
			$(".bg .one").css({"position":"fixed","top":"97px"});
		}else{
			$(".bg .one").css({"position":""});
			$(".bg .two").css({"margin-top":""});
			$(".bg .two .h").css({"width":"181px"});
		}
	})
}