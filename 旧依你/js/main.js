$(function(){
  //首页轮播
  var menuBgNow = 0;
  var times = 3;
  var menuBgT = null;
  var $ul = $(".slider ul");
  var $li = $(".slider ul li");
  var maxLen = $li.length;
  $ul.css({
    width : 100*maxLen + "%"
  });
  $li.css({
    width : 100/maxLen + "%"
  });
  menuBgT = setInterval(function(){
    menuBgNow++;
    if(menuBgNow == maxLen){
      menuBgNow = 0;
    }
    $ul.animate({
      marginLeft : -100 * menuBgNow + "%"
    });
  },times*1000);
  //首页轮播 END

  //旧衣改造底部菜单
  $(".jygz-btm-menu li:nth-child(1)").click(function(){
    $(".jygz-gyf").toggle();
  });
  $(".jygz-btm-menu li:nth-child(2)").click(function(){
    $(".jygz-gkq").toggle();
  });
  $(".jygz-btm-menu li:nth-child(3)").click(function(){
    $(".jygz-wyg").toggle();
  });
  //旧衣改造底部菜单 END

  //精品预约上传
  $(".jqA1").click(function(){
    $("#jqFile1").trigger("click");
  });
  $(".jqA2").click(function(){
    $("#jqFile2").trigger("click");
  });
  $(".jqA3").click(function(){
    $("#jqFile3").trigger("click");
  });
  $(".jqA4").click(function(){
    $("#jqFile4").trigger("click");
  });
  //精品预约上传 EBD

  
});

/*
 * 音乐
 */
var is_open = 'on';
window.onload=function(){
  //var id = document.getElementById("loading");
  //setTimeout(function(){document.body.removeChild(id)},1000);
  if($("#audio_btn").attr("url").indexOf("mp3")>1){
    var url = $("#audio_btn").attr("url"); 
    var auto = is_open=='on' ? 'autoplay' : '';
    var html = '<audio loop  src="'+url+'" id="media" '+auto+' ></audio>';
    setTimeout(function(){
      $("#audio_btn").html(html);
      $("#audio_btn").show().attr("class",is_open+" music-ani");
    },500);
    
    $("#audio_btn").on('touchstart',function(){
      var type = $("#audio_btn").attr("class");
      var media = $("#media").get(0);
      if($("#audio_btn").hasClass("on")){
        media.pause(); 
        $("#audio_btn").attr("class","off");
      }else{
        media.play();
        $("#audio_btn").attr("class","on music-ani"); 
      }  
    });
  }
}
// 音乐END