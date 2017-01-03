$(function(){
	bannerclick();
	newsroad();
});
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
		$(".banner").animate({
     	 	marginLeft : (-100 * num) + "%"
    	},1000);
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
//新闻切换
function newsroad(){
	$(".newsat .floatl li").each(function(index) {
		$(this).click(function() {	
			$(".newsat .floatl li").removeClass('active')
			.eq(index).addClass('active');
			$(".newsat .floatr>li").removeClass('active')
			.eq(index).addClass('active');
		});
	});
}