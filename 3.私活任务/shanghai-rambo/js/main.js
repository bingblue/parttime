$(function() {
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
	var h_list = new Array({
		title: "2016年5月30日--股份公司召开“2015年年度股东大会",
		content: "2016年5月30日，召开“上海润博电子系统设备股份有限公司2015年年度股东大会”，审议《关于2015年度董事会工作报告的议案》、《关于2015年度监事会工作报告的议案》、《关于2015年度财务报表及审计报告的议案》、《关于2015年度利润分配的议案》、《关于2015年度财务决算报告的议案》、《关于2015年度财务预算报告的议案》、《关于续聘立新会计事务所（特殊普通合伙）为公司2016年审计机构的议案》和《关于年报信息披露重大差错责任追究制度的议案》，八项议案获全票通过。"
	}, {
		title: "2016年5月24日—股份公司在新三板挂牌",
		content: "2016年5月24日。“全国中小企业股份转让系统”同意上海润博电子系统上班股份有限公司股票在全国中小企业股份转让系统挂牌，证券代码为“837650”。"
	}, {
		title: "2016年3月18日--股份公司获得ISO9001-2008质量管理体系认证证书“",
		content: "2016年3月18日，经“北京中大华远认证中心”审核，上海润博电子系统设备股份有限公司质量管理体系符合GB/T 19001-2008/ISO 9001-2008质量管理体系的要求，证书编号为“02016Q20606R0S”。"
	}, {
		title: "2016年1月4日--股份公司召开创立大会”",
		content: "2016年1月4日，公司召开创立大会，将有限公司截至2015年10月31日经审计的净资产值5,836,681.85元，按照1.668:1的比例折合为股份公司的股本350万元，超过折股部分的净资产进入资本公积，有限公司的债权、债务由变更后的股份公司承继。"
	}, {
		title: "2015年12月31日--公司获得“信息系统集成及服务资质证书”",
		content: "2015年12月31日，经“中国电子信息行业联合会”审核，核定上海润博电子系统设备有限公司的信息系统集成及服务资质为肆级，证书编号为“XZ4310020152442”。"
	}, {
		title: "2015年12月10日--股份公司设立及变更经营范围”",
		content: "2015年12月10日，有限公司召开股东会并作出决议，同意上海润博电子系统设备有限公司整体变更为股份有限公司。同意公司名称变更为上海润博电子系统设备股份有限公司，以2015年10月31日为基准日，按润博有限的净资产值折股整体变更设立股份公司。同意公司经营范围变更为：“弱电系统集成、计算机硬件、软件网络相关产品开发、销售、安装调试及售后服务，电子工程，通讯设备、电子电器、包装材料制品、机械配件、办公用品、一般劳防用品的销售，建筑业（凭资质），商务信息咨询。"
	}, {
		title: "2015年9月22日--有限公司第二次增资“",
		content: "2015年9月22日，公司召开股东会决定公司的注册资本由原来的200万人民币增加至350万元。其中原股东佘勇本次认缴出资人民币78.5万元，合计出资人民币178.5万元；原股东陈宏本次认缴出资人民币71.5万元，合计出资人民币171.5万元。"
	}, {
		title: "2014年11月2日--有限公司第二次变更经营范围”",
		content: "2014年11月2日，公司召开股东会决定变更公司经营范围，同意公司经营范围在原有的基础上增加：商务信息咨询。"
	}, {
		title: "2014年3月13日--有限公司第一次增资及第一次变更经营范围",
		content: "2014年3月13日，公司召开临时股东会决定公司的注册资本由原来的人民币100万元增加至200万元。其中原股东佘勇本次认缴出资人民币50万元，合计出资人民币100万元；原股东陈宏本次认缴出资人民币50万元，合计出资人民币100万元。公司经营范围在原有的基础上增加：建筑业（凭资质）。"
	}, {
		title: "2011年8月25日--有限公司注册号以及住所变更",
		content: "2011年8月25日，公司股东会通过决议，同意公司的住所由原来的“浦东三林镇杨思新村路60号106室”变更为“上海市浦东新区杨新东路26号496室”。公司于同日领取了注册号为310115000633673的《企业法人营业执照》。"
	}, {
		title: "2001年9月3日--有限公司成立",
		content: "2001年9月3日，上海市工商行政管理局浦东新区分局核准了上海润博电子系统设备有限公司设立登记，并核发了注册号为3101152003775号的《企业法人营业执照》，上海润博电子系统设备有限公司成立。"
	}, {
		title: "2001年8月20日--有限公司第一次股东会决议",
		content: "2001年8月20日，经上海润博电子系统设备有限公司第一次股东会决议通过，公司选举佘勇为公司执行董事，陈宏为公司监事。"
	});
	var h_num = h_list.length;
	var h_now = 1;
	var h_list_num = 7;
	var h_page_num = parseInt(h_list.length / h_list_num);
	var temp = h_list.length % h_list_num;
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
				h_html = h_html + "<div class=\"h_news_list\"><div class=\"h_ad\"></div><div class=\"h_news\"><a href=\"#\"><p class=\"h_news_title\">" + h_list[i].title + "</p><p class=\"h_news_content\">" + h_list[i].content + "</p></a></div></div>";
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