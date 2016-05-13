var count = 3;
var countsure = false;
var time = 15;
var clickNum = 0;
var timesure = false;
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
			$(".prompt").html($("#name").val()+"准备就绪");
			$(".popup .count").css({display:"block"})
			countsure = true;
			var timer = setInterval(function(){
				if(countsure){
					--count;
					$(".popup .count").text(count);
					if(count == 0){
						$(".popup .count").text("GO!");
						clearInterval(timer);
						$(".popup").css({display:"none"})
						$(".main .mark").css({display:"none"})
						timesure = true;
					}
				}	
			},1000);
		}
	})
	var t = setInterval(function(){
		if(timesure){
			--time;
			$(".time font").text(time);
			if(time == 0){
				clearInterval(t);
				$.ajax({  
					type : "post",  
					url : "",  
					data : {num:clickNum},  
					async : true,  
					success : function(data){  
						console.log("提交成功！")
					}  
				});  
			}
		}
	},1000);
	$(".jq-an").mutouch({
		banRight :true,
		onEnd:function(event){
			if(timesure){
				$(".jq-an").attr("src","img/baojian02.png")
				clickNum++;
			}
		}
	});
});