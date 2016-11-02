$(function(){
  /* 首页-成功案例跑马灯 */
  var caseNow = 4;
  var caseNum = $(".case-cont li").length;
  function gotoCase(index){
    if(index>caseNum){
      caseNow = caseNum;
      return;
    }
    if(index<4){
      caseNow = 4;
      return;
    }
    $(".case-cont ul").animate({
      marginLeft : -270*(index-4)
    },800)
  }
  $(".jt-next").click(function(){
    gotoCase(++caseNow);
  });
  $(".jt-pre").click(function(){
    gotoCase(--caseNow);
  });
  /* 首页-成功案例跑马灯END */

  /* 解决方案-选择 */
  $(".solutions-cont li").each(function(index){
    $(this).click(function(){
      $(".solutions-cont li.active").removeClass("active");
      $(this).addClass("active");
      $(".box.active").removeClass("active");
      $(".box").eq(index).addClass("active");
    });
  });
  /* 解决方案-选择END */
  /* 服务支持-选择 */ 
  $(".h_main .h_left .h_menu li").each(function(index){
	$(this).click(function(){
	  $(".h_main .h_left .h_menu li.h_select").removeClass("h_select");
	  $(this).addClass("h_select");
	  $(".h_right.h_show").removeClass("h_show");
	  $(".h_right").eq(index).addClass("h_show");
	});
  });
  /* 服务支持-选择END */
});