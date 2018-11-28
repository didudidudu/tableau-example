/*
 *	@Author: gjm
 *	@Date: 2018-11-27
*/
$(function(){
	//获取引入js时的值
	var pageName = $('#pagename').data('name');
	
	//显示或隐藏返回上级按钮
	$('.nav-top .back-plevel').show().attr('data-name',pageName);
	//底部菜单栏初始化
	bottomMenu(markh);
	//点击菜单栏
	$("#menulist li").on("click",function(e){
		$(this).addClass("topbar-bg").siblings().removeClass("topbar-bg");
		$(".longcontent").css("left","-"+$(this).data("number")+"00%");
	});
	//屏幕自适应,需要根据顶栏宽度修改减去的值
	$(".toptabs").css("height",($(window).height()-124)+"px");
	$(window).resize(function(e){
		$(".toptabs").css("height",($(window).height()-124)+"px");
	});
});
function bottomMenu(n){
	$(".topbar").show();
	$("#menulist").empty();
	var num = 0;
	$(".toptabs").each(function(e){
		if(num == n){
			$("#menulist").append("<li class='topbar-bg' data-number='"+ num +"'><p>"+$(this).data("name")+"</p></li>");
			$(".longcontent").css("left","-"+ n +"00%");
		}else{
			$("#menulist").append("<li data-number='"+ num +"'><p>"+$(this).data("name")+"</p></li>");
		}
		num++;
	});
}
