
    // $(function(){
    //   setTimeout(function(){
    //     jQuery.validate.addMethod("byteRangeLength", function (value, element, param) {
    //       var length = value.length;
    //       for(var i = 0; i < value.length; i++){
    //           if(value.charCodeAt(i) > 127){
    //           length++;
    //           }
    //       }
    //       return this.optional(element) || ( length <= param );
    //     },$.validate.format("最多{0}个字节，一个汉字为两个字节"));
    //   },500);

    // })
    var nowMenu = 0;
    var nowSubmenu = 0;
    var action = 0;
    var menusid = 0;
    var arraylist = window.graphic_add.data;
    var i = 0;
    var tempMenu = 0;
    var tempSubmenu = 0;
    // var datalist = window.datalist;
    
    // function selByID(id){
    //   for(var i=0;i<datalist.length;i++){
    //     if(datalist[i].id == id){
    //       return datalist[i];
    //     }
    //   }
    // }
    function init(){
      // $('[data-toggle="city_custom"]').each(function(){
      //   $(this).cxSelect({
      //     selects: ['first', 'second'],
      //     nodata: 'none',
      //     url:window.cxSelectAdd
      //   });

      // });

      if(arraylist.length != 0){
        draw(arraylist);
      }
      setTimeout(function(){
        linkage();
      },50);
    }
    function createMenu(){
      var data = {
        "id" : "new"+(++i),
        "name" : "菜单名称",//+(++i),
        "action" : 1,
        "action_content" : "",
        "submenu":[]
      }
      arraylist.push(data);
      nowMenu = arraylist.length;
      nowSubmenu = 0;
      $(".menus"+(nowMenu-1)).addClass("menus"+nowMenu).removeClass("menus"+(nowMenu-1));
      $(".select-now").removeClass("select-now");
      $(".f_menus_val").eq(nowMenu-1).addClass("select-now");
      linkage();
    }
    function linkage(){
      if(nowMenu == 0){
        $(".has_cont").hide();
        $(".none_cont").show();
      }
      if(nowMenu != 0 && nowSubmenu == 0){
        $(".none_cont").hide();
        $(".has_cont").show();
        $(".menus_type").text("一");
        setData()
      }
      if(nowMenu != 0 && nowSubmenu != 0){
        $(".none_cont").hide();
        $(".has_cont").show();
        $(".menus_type").text("二");
        setData()
      }
      $(".menus_name").show();
      $(".menus_iptname").hide();
    }
    function setData(){
      var nowDate = {
        "id" : "0",
        "name" : "我的菜单",
        "action" : 0,
        "action_content" : ""
      }
      if(nowMenu != 0){
        nowDate = arraylist[nowMenu-1];
        if(nowSubmenu !=0){
          nowDate = arraylist[nowMenu-1].submenu[nowSubmenu-1];
          $(".f_menus").eq(nowMenu-1).find(".ff_menus_val").eq(nowSubmenu-1).text(nowDate.name);
        }else{
          $(".f_menus").eq(nowMenu-1).find(".f_menus_val").text(nowDate.name);
        }
      }

      $(".menus_name").text(nowDate.name);
      $(".menus_iptname").val(nowDate.name);
      //action 赋值
      action = nowDate.action;
      menusid = nowDate.id;
      if(nowDate.action != 0){
        //$("#menus_choose_action").hide();
        //$(".menus_action-cont").hide();
        //$(".action_content"+nowDate.action).show();
        $("#url").hide();
        $("#ad_content").hide();
        if(nowDate.action == 1){
          $(".menus_txt_name").text("链接");
          var num_fir = nowDate.action_content;
          $(".radio_type").eq(0).prop("checked",true);
          $("#url input").val(num_fir);
          $("#url").show();
        }else if(nowDate.action == 4){
          $(".menus_txt_name").text("文本信息");
          $(".radio_type").eq(3).prop("checked",true);
          var fir_data = nowDate.action_content[0];
          var sec_data = nowDate.action_content[1];
          $("#twid").val(fir_data);
          $("#ad_content_div a").text(sec_data);
          $("#ad_content").show();
        }else if(nowDate.action == 2){
          $(".menus_txt_name").text("单图文信息");
          $(".radio_type").eq(1).prop("checked",true);
          var fir_data = nowDate.action_content[0];
          var sec_data = nowDate.action_content[1];
          $("#twid").val(fir_data);
          $("#ad_content_div a").text(sec_data);
          $("#ad_content").show();
        }else if(nowDate.action == 3){
          $(".menus_txt_name").text("多图文信息");
          var contid = nowDate.action_content;
          $(".radio_type").eq(2).prop("checked",true);
          var fir_data = nowDate.action_content[0];
          var sec_data = nowDate.action_content[1];
          $("#twid").val(fir_data);
          $("#ad_content_div a").text(sec_data);
          $("#ad_content").show();
        }
      }else{
        $(".menus_action-cont").hide();
        $("#menus_choose_action").show();
      }
    }

    function createSubmenu(isCreate){
      var data = {
        "id" : "new"+(++i),
        "name" : "菜单名称",//+(++i),
        "action" : 1,
        "action_content" : "",
        "submenu":[]
      }
      if(isCreate){
        arraylist[nowMenu-1].submenu.push(data);
      }
      nowSubmenu = arraylist[nowMenu-1].submenu.length;
      if(nowSubmenu == 5){
        $(".f_menus").eq(nowMenu-1).find(".js_createSubmenu").hide();
      }
      $(".select-now").removeClass("select-now");
      var newSub = $("<a class='ff_menus_val select-now' href='javascript:;'>"+ data.name +"</a>");
      $(".f_menus").eq(nowMenu-1).find(".ff_menus").addClass("has_val").append(newSub);
      linkage();
    }

    function save(){
      var name;
      if(nowSubmenu == 0){
        name = $(".onemn").val();
      }else{
        name = $(".twomn").val();
      }
      // var num_fir = $(".js_link_type_select:checked").val();
      // var num_sec = "init";
      // if(num_fir==1){
      //   num_sec = $(".mu_url2").val()
      // }else{
      //   num_sec = $(".mu_url").val()
      // }
      var num_txt = $(".mu_name").val();
      var nowDate = {
        "id" : "new0",
        "name" : "我的菜单",
        "action" : 0,
        "action_content" : ""
      }
      if(nowMenu != 0){
        nowDate = arraylist[nowMenu-1];
        if(nowSubmenu !=0){
          nowDate = arraylist[nowMenu-1].submenu[nowSubmenu-1];
        }
        nowDate.name = name;
        nowDate.action = action;
        if(action == 1){
          // nowDate.action_content = [];
          nowDate.action_content = "";
          nowDate.action_content = $("#url input").val();
          // nowDate.action_content[1] = num_sec;
          // nowDate.action_content[2] = num_txt;
        }else if(action == 4){
          nowDate.action_content = [];
          nowDate.action_content[0] = $("#twid").val();
          nowDate.action_content[1] = $("#ad_content_div a").text();
        }else if(action == 2){
          nowDate.action_content = [];
          nowDate.action_content[0] = $("#twid").val();
          nowDate.action_content[1] = $("#ad_content_div a").text();
        }else if(action == 3){
          nowDate.action_content = [];
          nowDate.action_content[0] = $("#twid").val();
          nowDate.action_content[1] = $("#ad_content_div a").text();
        }

        $("#menusdata").val(JSON.stringify(arraylist));
        $("#menusid").val(menusid);
        linkage();
      }
    }

    function del(){
      if(nowMenu != 0){
        if(nowSubmenu !=0){
          arraylist[nowMenu-1].submenu.splice(nowSubmenu-1,1);
          $(".f_menus").eq(nowMenu-1).find(".js_createSubmenu").show();
          if(nowSubmenu-1==0){
            $(".f_menus").eq(nowMenu-1).find(".has_val").removeClass("has_val");
          }
          //tempMenu = nowSubmenu;
          //tempSubmenu = nowSubmenu-1;
        }else{
          arraylist.splice(nowMenu-1,1);
          //tempMenu = nowMenu-1;
          //tempSubmenu = arraylist[nowMenu-1].submenu.length-1;
        }
        $(".ff_menus_val").remove();
        draw(arraylist);
        //nowMenu = tempMenu;
        //nowSubmenu = tempSubmenu;
        linkage();
      }
    }

    function draw(data){
      $(".menus_items").removeClass().addClass("menus_items menus"+data.length);
      nowMenu = 0;
      for(var i=0;i<data.length;i++){
        //赋值一级菜单
        nowMenu = i+1;
        nowSubmenu = 0;
        action = data[i].action;
        if(action==1||action==2){
          $(".action_content"+ action +" input[name=graphicid]").val(data[i].action_content);
        }
        $(".select-now").removeClass("select-now");
        $(".f_menus").eq(i).find(".f_menus_val").text(data[i].name).addClass("select-now");
        //赋值并创建二级菜单
        for(var j=0;j<data[i].submenu.length;j++){
          nowSubmenu = j+1;
          action = data[i].submenu[j].action;
          createSubmenu(false);
          $(".f_menus").eq(i).find(".ff_menus_val").eq(j).text(data[i].submenu[j].name);
        }
      }
    }

    $(".js_createMenu").click(function(){
      if($(".help-block").text()!=""){
        return;
      }
      save();
      createMenu();
    });
    $(".js_createSubmenu").click(function(){
      if($(".help-block").text()!=""){
        return;
      }
      save();
      var parents = $(this).parents(".f_menus");
      nowMenu = $(".f_menus").index(parents)+1;
      createSubmenu(true);
      return false;
    });

    $(".f_menus_val").each(function(index){
      $(this).click(function(){
        if($(".help-block").text()!=""){
          return;
        }
        save();
        //setTimeout(function(){
          nowMenu = index+1;
          nowSubmenu = 0;
          linkage();
          $(".select-now").removeClass("select-now");
          $(this).addClass("select-now");
        //},500);
      });
    });

    $(document).on("click",".ff_menus_val",function(index){
      //alert(1)
      if($(".help-block").text()!=""){
        return;
      }
      save();
      var $this = $(this);
      //setTimeout(function(){
        //$this.click(function(){
          var parents = $this.parents(".f_menus");
          var subs = $this.parents(".f_menus").find(".ff_menus_val");
          nowMenu = $(".f_menus").index(parents)+1;
          nowSubmenu = subs.index($this)+1;
          linkage();
          $(".select-now").removeClass("select-now");
          $(this).addClass("select-now");
        //});
      //},500);
    });

    $(".jq-rename").click(function(){
      $(".menus_name").hide();
      $(".menus_iptname").hide();
      $(".jq-rename").hide();
      $(".jq-savename").show();
      if(nowSubmenu != 0){
        $(".twomn").show();
      }else{
        $(".onemn").show();
      }
    });
    $(".jq-savename").click(function(){
      $(".jq-savename").hide();
      $(".jq-rename").show();
      save();
    });
    $("#save").click(function(){
      if($(".help-block").text()!=""){
        return;
      }
      $("#ispush").val("false");
      save();
      $("#menusdata").val(JSON.stringify(arraylist));
    });

    $("#push").click(function(){
      if($(".help-block").text()!=""){
        return;
      }
      $("#ispush").val("true");
      save();
      $("#menusdata").val(JSON.stringify(arraylist));
      // $("form").submit();
    });

    $(".jq-del").click(function(){
      var path = $(this).attr("data-path");
      var data = {"id":menusid};
      var result = window.confirm("确定删除吗？");
      if (result) {
        $.ajax({
          type:"POST",
          url:path,
          data:data,
          success:function(d){
            if(d.status==0){
              alert(d.message);
              del();
            }else{
              alert(d.message);
            }
          }
        });
      }
    });

    //可用each
    // $(".menus_href").click(function(){
    //   $(".menus_txt_name").text("常用链接");
    //   $("#menus_choose_action").hide();
    //   $(".action_content4").show();
    //   $("select[name=scenario]").val("");
    //   $("select[name=scenario]").trigger("change");
    //   action = 4;
    // });
    // $(".menus_info").click(function(){
    //   $(".menus_txt_name").text("发送信息");
    //   $("#menus_choose_action").hide();
    //   $(".action_content1").show();
    //   $(".show_item").remove();
    //   $(".action_content1 .js_graphic_select").removeClass("hide");
    //   action = 1;
    // });
    // $(".menus_picinfo").click(function(){
    //   $(".menus_txt_name").text("跳转到图文信息页");
    //   $("#menus_choose_action").hide();
    //   $(".action_content2").show();
    //    $(".action_content2 .js_graphic_select").removeClass("hide");
    //   $(".show_item").remove();
    //   action = 2;
    // });

    // $(".menus_action").click(function(){
    //   $(".menus_txt_name").text("");
    //   $(".menus_action-cont").hide();
    //   $("#menus_choose_action").show();
    //   action = 0;
    // });
    $(".radio_type").click(function(){
      $("#url").css("display","none");
      if($(this).val()==1){
        $("#url input").val('');
        action = 1;
        $("#twid").val(0);
        $("#url").css("display","block");
        $("#ad_content").css("display","none");
        $("#ad_content_div").html('');
        $("#twid").val('');
      }else if($(this).val()==2){
         action = 2;
         art.dialog.open("/index.php/Admin/Bottommenu/selectdtw",{
            title: '选择单图文',
            cancelValue: '返回',
            cancel: true,
            padding:"10px",
            width:"450px",
            height:"350px",
            top:'10%',
            lock: true,     //是否锁定屏幕. 默认:false
            //time:3,       //多少秒自动关闭
            fixed:false,
            ok: function () {
              var id = this.iframe.contentWindow.$("#id").val();
              var title = this.iframe.contentWindow.$("#title").val();
              $("#twid").val(id);
              $("#ad_content").css("display","block");
              $("#ad_content_div").html('<a href="javascript:void(0)">'+title+'</a>');
              $(this).attr("checked",'');
            },
         });
      }else if($(this).val()==3){
         action = 3;
         art.dialog.open("/index.php/Admin/Bottommenu/selectduotw",{
            title: '选择多图文',
            cancelValue: '返回',
            cancel: true,
            padding:"10px",
            width:"450px",
            height:"350px",
            top:'10%',
            lock: true,     //是否锁定屏幕. 默认:false
            //time:3,       //多少秒自动关闭
            fixed:false,
            ok: function () {
              var id = this.iframe.contentWindow.$("#id").val();
              var title = this.iframe.contentWindow.$("#title").val();
              $("#twid").val(id);
              $("#ad_content").css("display","block");
              $("#ad_content_div").html('<a href="javascript:void(0)">'+title+'</a>');
              $(this).attr("checked",'');
            },
         });
      }else if($(this).val()==4){
         action = 4;
         art.dialog.open("/index.php/Admin/Bottommenu/selectwb",{
            title: '选择文本',
            cancelValue: '返回',
            cancel: true,
            padding:"10px",
            width:"450px",
            height:"350px",
            top:'10%',
            lock: true,     //是否锁定屏幕. 默认:false
            //time:3,       //多少秒自动关闭
            fixed:false,
            ok: function () {
              var id = this.iframe.contentWindow.$("#id").val();
              var title = this.iframe.contentWindow.$("#title").val();
              $("#twid").val(id);
              $("#ad_content").css("display","block");
              $("#ad_content_div").html('<a href="javascript:void(0)">'+title+'</a>');
              $(this).attr("checked",'');
            },
         });
      }
    });

    init();
