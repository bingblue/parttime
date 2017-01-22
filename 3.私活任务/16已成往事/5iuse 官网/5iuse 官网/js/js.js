$(function(){
	bannerclick();
	cases();
	qqTlack();
	newsNotice();
	success();
	product();
	package();
})
//幻灯
function bannerclick(){
	var num = 0;
	//定时
	var time = setInterval(function(){
		num++;
		if (num > 2) {
			num = 0;
		}
		margin(num);
		$('.bannerdiv ul li').removeClass("active")
			.eq(num).addClass("active");
	},5000);
	function margin(num){
		$(".banner").children().eq(num).fadeIn(200).css({
			position: 'relative',
			zIndex: 1
		})
		.siblings().fadeOut(200).css({
			position: 'absolute',
			zIndex: 1
		});
	}
	$('.bannerdiv ul li').each(function(index) {
		$(this).click(function() {
			clearInterval(time);
			time = setInterval(function(){
				num++;
				if (num > 2) {
					num = 0;
				}
				margin(num);
				$('.bannerdiv ul li').removeClass("active")
					.eq(num).addClass("active");
			},5000);
			num = index;
			$('.bannerdiv ul li').removeClass("active")
			.eq(num).addClass("active");
			margin(num);
		});
	});
}
// 经典案例
function cases(){
	var num = 0;
	active(num);
	var index = $(".caseslist").length-1;
	function active(num){
		$(".caseslist").removeClass('active').eq(num).addClass('active');
	}
	$("#left").click(function(){
		num-=1;
		if(num<0){
			num = index;
		}
		active(num);
	})
	$("#right").click(function(){
		num+=1;
		if(num>index){
			num = 0;
		}
			active(num);
	})
}
// QQ 联系
function qqTlack(){
	var qqright = (document.body.clientWidth-1200)/2;
	$('.qq').css({'right':qqright+'px'});
	$(".qq .close").click(function(){
		$(this).parent().css({'display':'none'});
	})
}
// 新闻公告切换
function newsNotice(){
	$(".newgtop li").each(function(index){
		$(this).click(function(){
			$('.newgtop li').removeClass("active").eq(index).addClass("active");
			$(".newgdown>div").removeClass("active").eq(index).addClass("active");
		})
	})
}
// 经典案例页面切换
function success(){
	var $leftli = $(".sucdown .left li");
	var $lili  = $(".sucdown .left li");
	var $right = $(".sucdown .right li");
	$leftli.click(function(event) {
		$(this).addClass('active').siblings().removeClass("active");
		$right.hide().filter("."+$(this).attr('id')+"").show();
		if($(this).is("#all")){
			$right.show();
		}
		if($(this).children('ul').length>0) {
			if ($(this).hasClass('pre')) {
				$(this).removeClass('pre');
			}else{
				$(this).addClass('pre');
			}
		}
	});
	$lili.click(function(event) {
		$right.hide().filter("."+$(this).attr('id')+"").show();
		return false;
	});
}
// 产品中心 切换
function product(){
	$(".cpfl li").click(function(event) {
		$this = $(this);
		$id = $(this).attr('id');
		$this.addClass('now').siblings().removeClass('now');
		$(".cp li").hide().filter("."+$id+"").show();
		if($id == 'all'){
			$(".cp li").show();
		}
	});
}
// 套餐说明
function package(){
	// console.log($(".bg .two").offset().top);
	$(window).scroll(function(){
		var top=$(document).scrollTop();
		if(top>507){
			$(".bg .two").css({"margin-top":"124px"});
			//$(".bg .two .h").css({"width":"182px"});
			$(".bg .one").css({"position":"fixed","top":"0px",maxWidth:1200});
		}else{
			$(".bg .one").css({"position":""});
			$(".bg .two").css({"margin-top":""});
			//$(".bg .two .h").css({"width":"181px"});
		}
	})
}