$(function() {
	/* 通用 */
  $.getQueryString = function (name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null){
      return decodeURI(r[2]);
    }else{
      return null;
    }
  }
  $.getDataById = function (id,data){
    var result = {};
    $.each(data,function(index){
    	if(data[index].id == id){
    		result = data[index];
    	}
    });
    return result;
  }
  /* 通用END */
	/* 首页-成功案例跑马灯 */
	var caseNow = 4;
	var caseNum = $(".case-cont li").length;

	function gotoCase(index) {
		if(index > caseNum) {
			caseNow = caseNum;
			return;
		}
		if(index < 4) {
			caseNow = 4;
			return;
		}
		$(".case-cont ul").animate({
			marginLeft: -270 * (index - 4)
		}, 800)
	}
	$(".jt-next").click(function() {
		gotoCase(++caseNow);
	});
	$(".jt-pre").click(function() {
		gotoCase(--caseNow);
	});
	/* 首页-成功案例跑马灯END */
	/* 首页-Banner */
	var bannerNow = 0;
	var bannerNum = 4;
	var bannerColor = ['#f3f0e4','#d5dfdd','#b9e2ee','#fadada'];
	function gotoBanner(index) {
		$(".banner-cont li").eq(bannerNow).fadeOut(200,function(){
			$(".banner-cont li").eq(index).fadeIn(200);
			$(".banner").css({
				background:bannerColor[index]
			})
		});
		bannerNow = index;
		$(".banner-icons li.active").removeClass("active");
		$(".banner-icons li").eq(index).addClass("active");
	}
	$(".banner-icons li").each(function(index){
		$(this).click(function(){
			gotoBanner(index);
		});
	});
	setInterval(function(){
		var num = bannerNow+1;
		if(num>3){
			num = 0;
		}
		gotoBanner(num)
	},3000);

	//二维码
	$(".icon-ercode").mouseenter(function() {
		$(".ercode").show();
	}).mouseleave(function(){
		$(".ercode").hide();
	});
	/* 首页-Banner END */

	/* 解决方案-选择 */
	$(".solutions-cont li").each(function(index) {
		$(this).click(function() {
			$(".solutions-cont li.active").removeClass("active");
			$(this).addClass("active");
			$(".box.active").removeClass("active");
			$(".box").eq(index).addClass("active");
		});
	});
	/* 解决方案-选择END */
	/* 服务支持-选择 */
	$(".h_main .h_left .h_menu li").each(function(index) {
		$(this).click(function() {
			$(".h_main .h_left .h_menu li.h_select").removeClass("h_select");
			$(this).addClass("h_select");
			$(".h_right.h_show").removeClass("h_show");
			$(".h_right").eq(index).addClass("h_show");
		});
	});
	/* 服务支持-选择END */
	/* 公司新闻分页*/
	var h_list = [];
	$.ajax({
		url : 'js/news_data.json',
		type : 'GET',
		async: false,//使用同步的方式,true为异步方式
		dataType:"json",
		success : function(data){
			h_list = data.newData[0];
		},
		fail:function(){
			window.location.reload(true);
		}
	});
	var h_num = h_list.data.length;
	var h_now = 1;
	var h_list_num = 7;
	var h_page_num = parseInt(h_num / h_list_num);
	var temp = h_num % h_list_num;
	if(temp > 0.0) {
		h_page_num++;
	}
	$("#h_paging_home").click(function() {
		h_first();
	});
	$("#h_paging_end").click(function() {
		h_end();
	});
	$("#h_paging_prev").click(function() {
		h_to(h_now - 1);
	});
	$("#h_paging_next").click(function() {
		h_to(h_now + 1);
	});
	$("#p_paging_num").html(h_page_num);
	$("#h_paging_sum").html(h_num);
	h_to(1);

	function h_nums() {
		var h_html = "<li data-num=\"" + h_now + "\" class=\"h_select\">" + h_now + "</li>";
		for(var i = 1; i <= 5; i++) {
			//left
			var index = h_now - i;
			if(index > 0) {
				h_html = "<li data-num=\"" + index + "\">" + index + "</li>" + h_html;
			}
			index = h_now + i;
			if(index <= h_page_num) {
				h_html += "<li data-num=\"" + index + "\">" + index + "</li>";
				continue;
			}
		}
		$("#h_paging_page").html(h_html);

		$("#h_paging_page li").click(function() {
			h_to(parseInt($(this).attr("data-num")));
		});
	}

	function h_to(now) {
		if(now > 0 && now <= h_page_num) {
			h_now = now;
			var end = h_now * h_list_num;
			var start = end - h_list_num;
			var h_list_box = $(".h_content_list");
			var h_html = "";
			for(var i = start; i < end && i < h_num; i++) {
				h_html = h_html + "<div class=\"h_news_list\"><div class=\"h_ad\"></div><div class=\"h_news\"><a href='news_info.html?categoryId="+h_list.categoryId+"&id="+h_list.data[i].id+"'><p class=\"h_news_title\">" + h_list.data[i].title + "</p><p class=\"h_news_content\">" + h_list.data[i].content + "</p></a></div></div>";
			}
			h_list_box.html(h_html);
			h_nums();
		}
	}

	function h_first() {
		h_to(1);
	}

	function h_end() {
		h_to(h_page_num);
	}
	/* 公司新闻分页END*/

});