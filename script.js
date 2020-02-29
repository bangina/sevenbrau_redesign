$(document).ready(function(){
   $('.sub').hide();
    $('.gnb>ul>li>a').hover(function(){
       $(this).next().stop().slideDown(); 
    },function(){
        $(this).next().stop().slideUp();
    });
    $('.sub').hover(function(){
       $(this).stop().show(); 
    },function(){
        $(this).stop().slideUp();
    });
    //
    $('.gnb>ul>li>a').prev().hide();
    
    //메뉴 토글
    $('.close_btn').hide();
    $('.toggle_btn').click(function(){
       $('.hd_slide').animate({'left':'0'},700);
        $(this).hide();             //햄버거버튼
        $('.close_btn').show();
           
        $('.close_btn').click(function(){
           $('.hd_slide').animate({'left':'-100%'},700);
            $('.toggle_btn').show();
        });        
            });
    
    //스크롤   

// Create a new ScrollTrigger instance with default options
const trigger = new ScrollTrigger() // When not using npm, create a new instance with 'new ScrollTrigger.default()'
// Add all html elements with attribute data-trigger
trigger.add('[data-trigger]'
           
           )});