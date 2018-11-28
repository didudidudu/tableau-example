/*
 *	@Author: gjm
 *	@Date: 2018-11-27
*/
//高级舆情显示页面标识
var markh = 0;
$(function(){
	//替代iframe方法
	$.get("pages/3d_nand/3d_nand_p.html",function(data){
		$("#iframeContent").html(data);
	});
	//点击切换填充内容
	$(".nav ul li").click(function(){
		var current = $(this);
		target = current.find('a').attr('target');
		if(target!=""){
			$.get(target,function(data){
				$("#iframeContent").html(data);
			});
			$(this).parents(".nav").find(".nav-item li").removeClass("bc");
			$(this).addClass("bc");
		}
		markh = 0;
	});
	//监听返回上级按钮
	$('.nav-top .back-plevel').on('click',function(e){
		var htmlname = $(this).attr('data-name');
		$.get("pages/"+ htmlname +"/"+ htmlname +"_p.html",function(data){
//		$.get("pages/"+ $(this).data('name') +"/"+ $(this).data('name') +"_p.html",function(data){
			$("#iframeContent").html(data);
		});
		$(".nav").find(".nav-item li[class='bc']").parent().find('li').first().addClass("bc").siblings().removeClass("bc");
		markh = 0;
		e.stopPropagation();
	});
});

