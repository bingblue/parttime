var imgNow = 1;
$(function(){
	$("body").click(function(){
		$(".prompt").html("");
	})
	$(".popup .sure").bind("click",function(){
		if($("#name").val()==""){
			$(".prompt").html("请先输入昵称!");
			event.stopPropagation();
		}else{
			event.stopPropagation();
			$(".time").html($("#name").val()+" 准备就绪!");
			$(".popup").hide();
		}
	})
	$(".jq-an").mutouch({
		banRight :true,
		onEnd:function(event){
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