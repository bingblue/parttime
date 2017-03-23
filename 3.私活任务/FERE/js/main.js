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
	$(".home .btn-close,.mask-home").click(function(){
		$(".home").removeClass('menu-on');
	});
	//注册步骤
	$('#reg').click(function(){
		location.href = 'reg1.html';
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
	// brand 整体导航
	(function(){
		$(".brand .brand-items>div").each(function(index) {
			$(this).click(function(event) {
				$(this).addClass('active').siblings().removeClass('active');
				$(".brand .pro-list>div").eq(index).addClass('active').siblings().removeClass('active');
			});
		});
	})();
	// brand list-3
	(function(){
		setInterval(function(){
			$(".brand .list-3-movie").find(".active").removeClass('active').siblings().addClass('active');
		},2000);
	})();
	// brand-1 list
	(function(){
		var $num = 0;
		var $brand = $(".brand .brand-list-group>a");
		var $length = $brand.length;
		setInterval(function(){
			$num ++;
			if ( $num>=$length ) {
				$num = 0;
			}
			$brand.eq($num).fadeIn("slow").addClass('active').siblings("a").fadeOut(0).removeClass('active');
			$(".brand .brand-list-group ul>li").removeClass('active').eq($num).addClass('active');
		},3000)
	})();
	// sreach tag
	(function(){
		var $num = 0;
		var $brand = $(".brand-2 .brand-list-group>a");
		var $length = $brand.length;
		setInterval(function(){
			$num ++;
			if ( $num>=$length ) {
				$num = 0;
			}
			$brand.eq($num).fadeIn("slow").addClass('active').siblings("a").fadeOut(0).removeClass('active');
			$(".brand-2 .brand-list-group ul>li").removeClass('active').eq($num).addClass('active');
		},3000)
	})();
	// 消息关闭
	$(".pre-message .close").click(function(event) {
		$(this).parents(".mark").fadeOut('slow');
	});
	//返回事件
	$('.return').click(function(){
		history.go(-1);
	});
	// search 整体导航
	(function(){
		$(".xc-sreach .sreach-banner>a").each(function(index) {
			$(this).click(function(event) {
				$(this).addClass('active').siblings().removeClass('active');
				$(".xc-sreach .sreach-content>div").eq(index).addClass('active').siblings().removeClass('active');
			});
		});
	})();
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