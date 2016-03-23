$(function(){
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
})


//接单
$(function(){
			$(".sure").hide();
			$(".down-right").click(function(){
				$(".sure").show();
				
			})
			
			$(".sur-left").click(function(){
				$(".sure").hide();
			})
			$(".sure-up").click(function(){
				$(".sure").hide();
			})
			
		})