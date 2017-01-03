
$(function() {
	$(".dyd-dd .dd-menu li").each(function(index){
    $(this).click(function(){
      go(index);
    })
  })
  function go(num){
    $(".dyd-dd .gzdd div").css("display","none").eq(num).css("display","block");
    $(".dyd-dd .dd-menu li").css("color","#9E9E9E");
    $(".dyd-dd .dd-menu li").eq(num).css("color","#FD602D");
  }
  // 接单
  $(".sure").hide();
  $('.loc').hide();
	$(".down-right").click(function(){
		$(".jq-sure").show();
	})
	$(".jq-message").click(function(){
		$(".jq-history").show();
	})
	$(".jq-history .sur-left").click(function(){
		$(".jq-history").hide();
	})
	$(".jq-history .sure-up").click(function(){
		$(".jq-history").hide();
	})

	$(".jq-sure .sur-left").click(function(){
		$(".jq-sure").hide();
	})
	$(".jq-sure .sure-up").click(function(){
		$(".jq-sure").hide();
	})


	$('*[data-toggle]').click(function(){
		$class = $(this).attr("data-toggle");
		$('.'+$class).toggle();
	})
	
	$('.loc li').click(function(){
		var text=$(this).html();
		$("*[data-toggle='loc'] span").text(text);
		$('.loc').hide();
	})
	
			
	/*  彭乐 更新 2016-3-23 16:25:24*/
	$(".btn-2").click(function() {
		$(".jq-sw-mask1").show();
	});
	$(".btn-1").click(function() {
		$(".jq-sw-mask2").show();
	});
	$(".sw-fix2-gb").click(function() {
		$(".jq-sw-mask2").hide();
	});
	$(".qr-fix2").click(function() {
		$(".jq-sw-mask2").hide();
	});
	$(".sw-gb").click(function() {
		$(".jq-sw-mask1").hide();
	});
	$(".qr").click(function() {
		$(".jq-sw-mask1").hide();
	});

	/*小色更新 2016-3-12 17：17*/
	$(".hd-focus-left").click(function() {
		$(".xs-mask").toggle();
		$(".hd-focus-left-hover").toggle();
	});
	$(".hd-focus-right").click(function() {
		$(".xs-mask").toggle();
		$(".hd-focus-right-hover").toggle();
	});
	$(".gb-hide").click(function() {
		$(".xs-mask").hide();
		$(".hd-focus-left-hover").hide();
	});
	$(".xs-mask").click(function() {
		$(".xs-mask").hide();
		$(".hd-focus-left-hover").hide();
		$(".hd-focus-right-hover").hide();
	});


	$(".jq-assess").click(function(){
		$(".jq-mask-assess").show();
	})
	$(".jq-mask-assess .cha a").click(function(){
		$(".jq-mask-assess").hide();
	})
})

