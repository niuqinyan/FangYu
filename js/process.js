// JavaScript Document
$(function (){
	//去掉每行最后一个<li>里面的<span>,并且设置每行的宽度
	$("#process_content ul").find("li:last-child span").remove();
        $("#process_content ul").find("li:last-child").css("width",16);
	$("#process_content ul:eq(1)").width($("#process_content ul:eq(1) li").size()*59-43);
	$("#process_content ul:eq(0)").width($("#process_content ul:eq(0) li").size()*59-43);
	
	//<a>（节点信息）样式
        $("#process_content ul").find("li:even a").css("top",2);
	$("#process_content ul").find("li:odd a").css("top",56);
	$("#process_content ul").find("li a").css("left",-40);
	//如果第一行排满14个节点，则隐藏所有节点的信息,并且调节每行的高度和距离
	if($("#process_content ul:eq(0) li").size()>14||$("#process_content ul:eq(1) li").size()>0){
		$("#process_content ul,#process_content ul li,#process_content ul li span").css("height",45);
		$("#process_content").css({
			"height":106,
			"padding-top":13
			});
				
		//显示和隐藏节点信息
		$("#process_content ul li a").hide();
		$("#process_content ul li").mouseover(function(){
			$(this).find("a").show();
		});
		$("#process_content ul").mouseout(function(){
			$(this).find("li a").hide();
		});
			
		//换行后小图标的background-position会发生变化，用以下代码重新添加一个修改position后的class类
		$("#process_content ul li").addClass("change_li_position");
		$("#process_content ul li span").addClass("change_span_position");
		$("#process_content ul").find(".active").addClass("change_active_position");	
		$("#process_content ul").find("li:even a").css("top",-5);
		$("#process_content ul").find("li:odd a").css("top",40);

	}
});

//停止事件的传播，即<span>,<a>停止了<li>传给他们的点击事件
$(function(){
      $("#process_content ul li span,#process_content ul li a").click(function(event){
         event.stopPropagation(); 
      });
});
