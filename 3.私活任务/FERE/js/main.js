$(function () {
	// start 页面页脚
	var startSays = ["A New<br>Fashion Sharing Platform<br>一个新的服装共享平台", "Your costume tour.<br>你的服装之旅", "SHARE your dressing experience.<br>分享你的穿衣经验"];
	startFooterGo();

	function startFooterGo() {
		var p = $(".xc-start .start-footer p");
		p.html(startSays[0]);
		var num = 1;
		setInterval(function () {
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
	$(".btn-menu").click(function () {
		$(".home").addClass('menu-on');
	});
	$(".home .btn-close,.mask-home").click(function () {
		$(".home").removeClass('menu-on');
	});
	//home-menu-on 菜单
	$(".home-menu-on").click(function () {
		$(".home-menu").show();
	});
	$(".close-home-menu").click(function () {
		$(".home-menu").hide();
	});

	//注册步骤
	$('#reg').click(function () {
		location.href = 'reg1.html';
	});
	// 完善信息 
	$("#headbtn").click(function (event) {
		$("#headfile").click();
	});
	// 完善信息男女切换
	$("#reManwomen .btn").click(function () {
		$(this).parent().siblings('.left').find('span').text($(this).val());
		$(this).removeClass('no').siblings().addClass('no');
	});
	// brand 整体导航
	(function () {
		$(".brand .brand-items>div").each(function (index) {
			$(this).click(function (event) {
				$(this).addClass('active').siblings().removeClass('active');
				$(".brand .pro-list>div").eq(index).addClass('active').siblings().removeClass('active');
			});
		});
	})();
	// brand list-3
	(function () {
		setInterval(function () {
			$(".brand .list-3-movie").find(".active").removeClass('active').siblings().addClass('active');
		}, 2000);
	})();
	// brand-1 list
	(function () {
		var $num = 0;
		var $brand = $(".brand .brand-list-group>a");
		var $length = $brand.length;
		setInterval(function () {
			$num++;
			if ($num >= $length) {
				$num = 0;
			}
			$brand.eq($num).fadeIn("slow").addClass('active').siblings("a").fadeOut(0).removeClass('active');
			$(".brand .brand-list-group ul>li").removeClass('active').eq($num).addClass('active');
		}, 3000)
	})();
	// sreach tag
	(function () {
		var $num = 0;
		var $brand = $(".brand-2 .brand-list-group>a");
		var $length = $brand.length;
		setInterval(function () {
			$num++;
			if ($num >= $length) {
				$num = 0;
			}
			$brand.eq($num).fadeIn("slow").addClass('active').siblings("a").fadeOut(0).removeClass('active');
			$(".brand-2 .brand-list-group ul>li").removeClass('active').eq($num).addClass('active');
		}, 3000)
	})();
	// 消息关闭
	$(".pre-message .close").click(function (event) {
		$(this).parents(".mark").fadeOut('slow');
	});
	//聊天提醒自动关闭
	(function () {
		setTimeout(function(){
			$("#haschat").fadeOut(200);
		},3000);
	})();
	//点击聊天提醒出来聊天框
	$("#haschat").click(function(){
		$("#haschat").fadeOut(200);
		$(".mark").show();
	});
	//返回事件
	$('.return').click(function () {
		history.go(-1);
	});
	// search 整体导航
	(function () {
		$(".xc-sreach .sreach-banner>a").each(function (index) {
			$(this).click(function (event) {
				$(this).addClass('active').siblings().removeClass('active');
				$(".xc-sreach .sreach-content>div").eq(index).addClass('active').siblings().removeClass('active');
			});
		});
	})();
	//关注效果
	$("input[type='button'].gz").click(function(){
		if($(this).hasClass("gz")){
			$(this).val("已关注").removeClass("gz").css({
				backgroundColor: "#65add5",
    		color: "#fff"
			});
		}else{
			$(this).val("关注").addClass("gz").css({
				backgroundColor: "#fff",
    		color: "#65add5"
			});;
		}
	});
	//home页消息发送
	$(".footer .send").click(function(){
		var txt = $(".footer .message-say input").val();
		$(".pre-message .body").append($("<p class='right'>"+txt+"</p>"));
		$(".footer .message-say input").val("");
	});
  //进入聊天页面
	$("#messageList li").mutouch({
		banRight: true,
		offsetX: 5,
		offsetY: 5,
		onTap: function (tapNum) {
			location.href = "talk.html";
		}
	});
	//标签进入搜索页
	$(".usergroup a").mutouch({
		banRight: true,
		offsetX: 5,
		offsetY: 5,
		onTap: function (tapNum) {
			location.href = "search.html";
		}
	});

	//首页submenu效果
	$(".submenu-down").click(function(){
		if(!$(this).parents("li").find(".on").length>0){
			$(this).prop("src","img/homeleft.png");
			$(this).parents("li").find(".off").addClass("on");
		}else{
			$(this).prop("src","img/homedown.png");
			$(this).parents("li").find(".on").removeClass("on");
		}
	});
	//进度条
	$(".progress").animate({
		width:"135%"
	},3000,function(){
		$(".progress").css({
			width:"0%"
		})
	});
	$(".sreach-content").mutouch({
		banRight: false,
		offsetX: 5,
		offsetY: 5,
		onSwipeTop: function (typeLR) {
			$(".progress").animate({
				width:"135%"
			},3000,function(){
				$(".progress").css({
					width:"0%"
				})
			});
		}
	});
  //进入首页
	$(".home-h1 .bg,.header .img,#loginBtn").mutouch({
		banRight: true,
		offsetX: 5,
		offsetY: 5,
		onTap: function (tapNum) {
			location.href = "home.html";
		}
	});
  //进入详情页
	$(".submenu>img:first-child,.homemain-down img").mutouch({
		banRight: true,
		offsetX: 5,
		offsetY: 5,
		onTap: function (tapNum) {
			location.href = "share-photo.html";
		}
	});
	//右下角菜单切换
	var menuName = $("#homepage-bg").data("menu");
	var menuUrl = $("#homepage-bg").data("url");
	var menuNow = 0;
	$("#homepage-bg").mutouch({
		banRight: true,
		offsetX: 5,
		offsetY: 5,
		onTap: function (tapNum) {
			if ($("#homepage-bg").hasClass("on")) {
				//$("#homepage-bg").removeClass().addClass("off");
				location.href = menuUrl[menuNow];
			} else {
				$("#homepage-bg").removeClass().addClass("on");
			}
		},
		onSwipeLeft: function (typeTD) {
			if (typeTD == "down") {
				$("#homepage-bg .fst").addClass('rdmenuItemOut');
				$("#homepage-bg .sed").addClass('rdmenuItemIn');
				setTimeout(function(){
					if((menuNow+1)>=menuName.length){
						menuNow = -1;
					}
					var temp = menuNow+2;
					if(temp>=menuName.length){
						temp = 0;
					}
					$("#homepage-bg .fst a").text(menuName[menuNow+1]);
					$("#homepage-bg .sed a").text(menuName[temp]);
					$("#homepage-bg .fst").removeClass('rdmenuItemOut');
				  $("#homepage-bg .sed").removeClass('rdmenuItemIn');
					++menuNow;
				},1000);
			}
		}
	});
	//右下角菜单切换END
});

function bannerclick() {
	var num = 0;
	//定时
	var time = setInterval(function () {
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
	$('.bannerdiv ul li').each(function (index) {
		$(this).click(function () {
			clearInterval(time);
			time = setInterval(function () {
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