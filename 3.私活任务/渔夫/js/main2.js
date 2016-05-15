var imgNow = 1;
var time = 15;
var isContinue = true;
$(function(){
	$("body").click(function(){
		$(".prompt").html("");
	})
	if(getCookie("yufu")!=null){
		$("#name").val(getCookie("yufu"));
	}else{
		console.log("b");
	}
	$(".popup .sure").bind("click",function(){
		if($("#name").val()==""){
			$(".prompt").html("请先输入昵称!");
			event.stopPropagation();
		}else{
			event.stopPropagation();
			$(".time").html($("#name").val()+" 准备就绪!");
			$(".mask").hide();
			$(".popup").hide();
			var name = "yufu";
			var value = $("#name").val();
			SetCookie(name,value)
			var t = setInterval(function(){
				--time;
				$(".timenum font").text(time);
				if(time == 0){
					isContinue = false;
					clearInterval(t); 
			}
		},1000);  
		}
	})
	$(".wrap").mutouch({
		banRight :true,
		onEnd:function(event){
			if(!isContinue){
			  return false;
			}
			event.stopPropagation();
			imgNow = imgNow==1?2:1;
			$(".jq-an").attr("src","img/baojian0"+imgNow+".png");
			$.ajax({  
				type:"GET",  
				url:"http://52.9.90.143/education/api/attraction/click?nickname="+$("#name").val(),  
				async:true,  
				success:function(data){  
					console.log("提交成功！")
				}  
			}); 
		}
	});
});
function getCookie(name){  
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));  
    if(arr != null){  
     return unescape(arr[2]); 
    }else{  
     return null;  
    }  
}   
function SetCookie(name,value){  
    var Days = 30*12;   //cookie 将被保存一年  
    var exp  = new Date();  //获得当前时间  
    exp.setTime(exp.getTime() + Days*24*60*60*1000);  //换成毫秒  
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();  
}   