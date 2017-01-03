$(function(){
  $('.jq-header>li').mouseenter(function(){
    $(this).find(".pos").show();
  }).mouseleave(function(){
    $(this).find(".pos").hide();
  });
  $('.area2 .item>li').mouseenter(function(){
    $(this).find(".pos").show();
    $(this).find(".pos-title").hide();
  }).mouseleave(function(){
    $(this).find(".pos-title").show();
    $(this).find(".pos").hide();
  });
  //幻灯片
  var nowSlider = 0;
  var maxSlider = $(".slider .items>li").length;
  function gotoSlider(id){
    $(".slider .items>li").hide();
    $(".slider .items>li").eq(id).show();
    $(".slider .icons>li").removeClass('active');
    $(".slider .icons>li").eq(id).addClass('active');
  }
  $(".slider .icons>li").each(function(index){
    $(this).click(function(){
      gotoSlider(index);
    });
  });
  $(".slider .jt-left").click(function(){
    nowSlider = nowSlider-->0?nowSlider--:maxSlider-1;
    gotoSlider(nowSlider);
  });
  $(".slider .jt-right").click(function(){
    nowSlider = nowSlider++<maxSlider-1?nowSlider++:0;
    gotoSlider(nowSlider);
  });
});