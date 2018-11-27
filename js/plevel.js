/*
 *	@Author: gjm
 *	@Date: 2018-11-27
*/
$(function(){
	//获取引入js时的值
	var pageName = $('#pagename').data('name');
	
	//监听点击标签进入响应的高级舆情
	$('.title-bg').on('click',function(e){
		markh = $(this).data('num');
		$.get("pages/"+ pageName +"/"+ pageName +"_h.html",function(data){
			$("#iframeContent").html(data);
		});
		$(".nav").find(".nav-item li[class='bc']").parent().find('li').eq(1).addClass("bc").siblings().removeClass("bc");
	});
	//显示或隐藏返回上级按钮
	$('.nav-top .back-plevel').hide();
});
