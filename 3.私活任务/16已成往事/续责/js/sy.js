$(function () {
	  	cpqh();
	  	qh();
	  	dwdh();
})
function cpqh() {
	$(".cpfl .wxjc").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .wxjc").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"}).removeClass('active');
	})
	$(".cpfl .wxyx").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .wxyx").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"}).removeClass('active');
	})
	$(".cpfl .qxsz").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .qxsz").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"}).removeClass('active');
	})
	$(".cpfl .lhdy").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .lhdy").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"}).removeClass('active');
	})
	$(".cpfl .jyhy").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .jyhy").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"}).removeClass('active');
	})
	$(".cpfl .dshy").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .dshy").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"}).removeClass('active');
	})
	$(".cpfl .rcbg").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(this).addClass('now');
		$(".cp li").css({"display":"none"});
		$(".cp .rcbg").css({"display":"inline-block"});
		$(".cpfl h3").css({"border-left":"6px solid #F5F5F5"}).removeClass('active');
	})
	$(".cpfl h3").bind("click",function() {
		$(".cpfl li").removeClass("now");
		$(".cp li").css({"display":"inline-block"});
		$(this).addClass('active');
	})
}
