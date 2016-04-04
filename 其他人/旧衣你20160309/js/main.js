
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
		$(".sure").show();
		
	})
	$(".sur-left").click(function(){
		$(".sure").hide();
	})
	$(".sure-up").click(function(){
		$(".sure").hide();
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
		$(".sw-mask").toggle();
		$(".fix").toggle();
	});
	$(".btn-1").click(function() {
		$(".sw-mask").toggle();
		$(".fix-2").toggle();
	});
	$(".sw-fix2-gb").click(function() {
		$(".sw-mask").hide();
		$(".fix-2").hide();
	});
	$(".qr-fix2").click(function() {
		$(".sw-mask").hide();
		$(".fix-2").hide();
	});
	$(".sw-gb").click(function() {
		$(".sw-mask").hide();
		$(".fix").hide();
	});
	$(".qr").click(function() {
		$(".sw-mask").hide();
		$(".fix").hide();
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

})

