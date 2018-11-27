/*
 *	@Author: gjm
 *	@Date: 2018-11-27
*/
$(function(){
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
            $('.index-contentbar').addClass('contentbar-min');
            
//          $('.back-plevel span').hide();
            $(this).find('i').addClass('fa-angle-double-right').removeClass('fa-angle-double-left');
            $('.nav-top .back-plevel').css('width','30px').css('bottom','40px');
        }else{
        	$('.nav').removeClass('nav-mini');
            $('.index-contentbar').removeClass('contentbar-min');
            
//          $('.back-plevel span').show();
            $(this).find('i').addClass('fa-angle-double-left').removeClass('fa-angle-double-right');
            $('.nav-top .back-plevel').css('width','100px').css('bottom','0px');
        }
    });
});