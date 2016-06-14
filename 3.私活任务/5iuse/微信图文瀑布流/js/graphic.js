var Graphic = function(data){
  this.dataList = data;
  this.init();
}

Graphic.prototype = {
  init:function(){
    this.draw();
  },
  _add:function(){
    var newObj = {
      id:this.dataList.length+1,
      title:"请填写标题",
      author:"",
      key:"",
      desc:"",
      img:"img/wei.jpg",
      action:1,//1.链接  2.模块 3.内容
      content:""
    }
    this.dataList.push(newObj);
    return newObj;
  },
  _del:function(id){
    this.dataList.splice(id-1,1);
    for(var i=0;i<this.dataList.length;i++){
      this.dataList[i].id = i+1;
    }
    return this.dataList[this.dataList.length-1];
  },
  _update:function(obj){
    this.dataList[obj.id-1] = obj;
    return obj;
  },
  _get:function(id){
    if(id){
      return this.dataList[id-1];
    }else{
      return this.dataList[this.dataList.length-1];
    }
  },
  draw:function(){
    $(".show-items").empty();
    if(this.dataList.length>0){
      $(".show-first h2").text(this.dataList[0].title);
      $(".show-first img").attr("src",this.dataList[0].img);
    }
    if(this.dataList.length>1){
      for(var i=1;i<this.dataList.length;i++){
        this.newItem(this.dataList[i]);
      }
    }
    $(".mask-item").hide();
    $(".jq-item .mask-item").eq(this.dataList.length-1).show();
    this.fill(this._get());
  },
  newItem:function(obj){
    var itemStr = '<div class="show-item jq-item">'+
      '<h2>'+obj.title+'</h2>'+
      '<img src="'+obj.img+'">'+
      '<div class="mask-item"><i class="fa fa-pencil"></i></div>'+
    '</div>';
    var $newItem = $(itemStr);
    $(".show-items").append($newItem);
  },
  fill:function(obj){
    $("input[name=title]").val(obj.title);
    $("input[name=author]").val(obj.author);
    $("input[name=key]").val(obj.key);
    $("#desc").val(obj.desc);
    $("#image").attr("src",obj.img);
    $("input[name=radio]").eq(obj.action-1).trigger("click");
    if(obj.action==1){
      $("#url").val(obj.content);
    }else if(obj.action==2){
      $("#menu1").val(obj.content[0]);
      $.ajax( {
        url: "/index.php/Admin/Wechatmulti/ajaxGetMenuList",
        data:{
          id : obj.content[0],
        },
        type:'post',
        cache:false,
        dataType:'text',
        success:function(data) {
          if(data){
            $("#level_two_select").html(data);
            $("#level_two").css('display','block');
            $("#menu2").val(obj.content[1]);
          }
        }
      });
    }else if(obj.action==3){
      $("#content").val(obj.content);
      console.log(obj)
      console.log(obj.content)
      var ue = UE.getEditor('container');
      ue.ready(function() {
          ue.setContent(obj.content);
      });
    }
  },
  save:function(id){
    var action = $("input[name=radio]:checked").val();
    var nowObj = {
      id:id,
      title:$("input[name=title]").val(),
      author:$("input[name=author]").val(),
      key:$("input[name=key]").val(),
      desc:$("#desc").val(),
      img:$("#image").attr("src"),
      action:action,//1.链接  2.模块 3.内容
      content:""
    }
    if(action==1){
      nowObj.content = $("#url").val();
    }else if(action==2){
      nowObj.content=[];
      nowObj.content[0] = $("#menu1").val();
      nowObj.content[1] = $("#menu2").val();
    }else if(action==3){
      nowObj.content = $("#content").val();
      var ue = UE.getEditor('container');
      ue.ready(function() {
         nowObj.content= ue.getContent();
      });
    }
    //做验证！
    if(nowObj.title==""){
      alert("标题不能为空！");
      return false;
    }
    if(nowObj.key==""){
      alert("关键词不能为空！");
      return false;
    }
    if(nowObj.desc==""){
      alert("描述不能为空！");
      return false;
    }
    if(nowObj.content==""){
      alert("内容不能为空！");
      return false;
    }

    this._update(nowObj);
    this.draw();
    return true;
  }
}

// var imitateData = [{
//   id:1,
//   title:"我是标题111111！",
//   author:"我是作者111111！",
//   key:"我是关键字111111！",
//   desc:"我是表述11111111！",
//   img:"img/logo2.png",
//   action:1,//1.链接  2.模块 3.内容
//   content:"www.baidu.com"
// },{
//   id:2,
//   title:"我是标题2！",
//   author:"我是作者111111！",
//   key:"我是关键字2！",
//   desc:"我是表述2！",
//   img:"img/avatar12.jpg",
//   action:2,//1.链接  2.模块 3.内容
//   content:[105,66]
// },{
//   id:3,
//   title:"我是标题333333！",
//   author:"我是作者333！",
//   key:"我是关键字3！",
//   desc:"我是表述3！",
//   img:"img/avatar12.jpg",
//   action:2,//1.链接  2.模块 3.内容
//   content:[105,66]
// }]

$(function(){
  $(".radio input").click(function(){
    $("#url").val('');
    $("#menu1").val('0');
    $("#level_two").css('display','none');
    $("#menu2").val('0');
    $("#content_div").css('display','none');
    $("#content").val('');
    var ue = UE.getEditor('container');
      ue.ready(function() {
         ue.setContent("");
      });
    if($(this).val()==1){
      $("#menus_action_content>div").hide();
      $(".action1").show();
      $("#cid").val('1');
    }else if($(this).val()==2){
      $("#menus_action_content>div").hide();
      $(".action2").show();
      $("#cid").val('2');
    }else if($(this).val()==3){
      $("#menus_action_content>div").hide();
      $(".action3").show();
      $("#cid").val('3');
    }
  });
  var initData = window.initData;
  var DataList = new Graphic(initData);
  var nowId = DataList.dataList.length-1;
  $(".show-box").on("mouseenter",".jq-item",function(){
    $(this).find(".mask-item").show();
  });
  $(".show-box").on("mouseleave",".jq-item",function(){
    var thisId = $(".show-box .jq-item").index($(this));
    $(".mask-item").hide();
    $(".mask-item").eq(nowId).show();
  });
  $(".show-box").on("click",".jq-item",function(){
    var thisId = $(".show-box .jq-item").index($(this));
    var isSave = DataList.save(nowId+1);
    if(!isSave)return false;
    nowId = thisId;
    $(".mask-item").hide();
    $(".mask-item").eq(nowId).show();
    DataList.fill(DataList._get(nowId+1));
  });
  $(".show-add a").click(function(){
    var itemLen = $(".jq-item").length;
    if(itemLen >= 5){
      alert("最多创建5个图文！");
      return false;
    }
    var isSave = DataList.save(nowId+1);
    if(!isSave)return false;
    DataList._add();
    nowId = DataList._get().id - 1;
    DataList.draw();
    DataList.fill(DataList._get());
  });
  $(".info-del a").click(function(){
    if(nowId == 0){
      alert("无法删除!");
      return false;
    }
    DataList._del(nowId+1);
    DataList.draw();
    nowId = DataList._get().id - 1;
    DataList.fill(DataList._get());
  });

  $("#submit").click(function(){
    var isSave = DataList.save(nowId+1);
    if(!isSave)return false;
    $("#data").val(JSON.stringify(DataList.dataList))
    $(".form-horizontal").submit();
  });

});