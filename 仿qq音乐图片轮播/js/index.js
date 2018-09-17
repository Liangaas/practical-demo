$(function(){
    var  i = 0;
    var timer = null;
    for(let j =0 ;j<$('.img li').length;j++){
        $('.num').append('<li></li>')
    }
    
    $(".container").hover(function(){
        $('.btn').show();
        $('.num').show();
    },function(){
        $('.btn').hide();
        $('.num').hide();
    });
    $(".num li:nth-of-type(2)").addClass('active');
   

});
