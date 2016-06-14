var Menu = function(data){
  this.dataList = data;
  this.init();
}

Menu.prototype = {
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
