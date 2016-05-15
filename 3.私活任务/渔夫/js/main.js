var imgNow = 1;
var time = 15;
var isContinue = true;
var name = "";
$(function(){

	function goon(name){
		$(".time").html(name+" 准备就绪!");
		$(".mask").hide();
		var t = setInterval(function(){
			--time;
			$(".timenum font").text(time);
			if(time == 0){
				isContinue = false;
				clearInterval(t);
			}
		},1000);
	}
	if(document.cookie.indexOf("locname")<0){
		$(".popup .sure").bind("click",function(){
			if($("#name").val()==""){
				$(".prompt").html("请先输入昵称!");
			}else{
				document.cookie = "locname="+$("#name").val();
				name = $("#name").val();
				goon(name); 
			}
		});
	}else{
		name = document.cookie.split("=")[1];
		goon(name);
	}
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
				url:"http://52.9.90.143/education/api/attraction/click?nickname="+name,  
				async:true,  
				success:function(data){  
					console.log("提交成功！")
				}  
			}); 
		}
	});
});