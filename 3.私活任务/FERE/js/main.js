$(function() {
	// start 页面页脚
	var startSays = ["A New<br>Fashion Sharing Platform<br>一个新的服装共享平台", "Your costume tour.<br>你的服装之旅", "SHARE your dressing experience.<br>分享你的穿衣经验"];
	startFooterGo();

	function startFooterGo() {
		var p = $(".xc-start .start-footer p");
		p.html(startSays[0]);
		var num = 1;
		setInterval(function() {
			num++;
			if (num > startSays.length) {
				num = 0
			}
			p.html(startSays[num]);
		}, 3000)
	}
	bannerclick();
	// $(".xc-home .home-h1 .left").click(function(event) {
	// 	$(".xc-home .wrap").animate({
	// 		marginLeft: 0
	// 	});
	// 	$(".xc-home .mark").show();
	// 	$(".xc-home ,html").css({"overflow":"hidden","height":"100%"});

	// });
	// $(".xc-home .mark").click(function(event) {
	// 	$(".xc-home .wrap").animate({
	// 		"marginLeft" : "-60%"
	// 	});
	// 	$(".xc-home .mark").hide();
	// 	$(".xc-home, html").css({"overflow":"scroll","height":"auto"});
	// });
	$(".btn-menu").click(function(){
		$(".home").addClass('menu-on');
	});
	$(".home .btn-close").click(function(){
		$(".home").removeClass('menu-on');
	});
	// 完善信息 
	$("#headbtn").click(function(event) {
		$("#headfile").click();
	});
	// 完善信息男女切换
	$("#reManwomen .btn").click(function(){
		$(this).parent().siblings('.left').find('span').text($(this).val());
		$(this).removeClass('no').siblings().addClass('no');
	});
});

function bannerclick() {
	var num = 0;
	//定时
	var time = setInterval(function() {
		num++;
		if (num > 2) {
			num = 0;
		}
		margin(num);
		$('.bannerdiv ul li').removeClass("active").eq(num).addClass("active");
	}, 5000);

	function margin(num) {
		$(".banner").children("div").eq(num).fadeIn(200).css({
			position: 'relative',
			zIndex: 1
		}).siblings("div").fadeOut(200).css({
			position: 'absolute',
			zIndex: 1
		});
	}
	$('.bannerdiv ul li').each(function(index) {
		$(this).click(function() {
			clearInterval(time);
			time = setInterval(function() {
				num++;
				if (num > 2) {
					num = 0;
				}
				margin(num);
				$('.bannerdiv ul li').removeClass("active").eq(num).addClass("active");
			}, 5000);
			num = index;
			$('.bannerdiv ul li').removeClass("active").eq(num).addClass("active");
			margin(num);
		});
	});
}