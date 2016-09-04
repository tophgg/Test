$(function(){ 
    $('.mask').click(function() {
        $(".mask").fadeOut();
        $("#img_expand img").fadeOut();
        // $("#img img").attr("src","");
        $(".img").fadeOut();

    })
    $('.img_ul img').click(function() {
        $(".mask").fadeIn();
        $("#img_expand img").fadeIn();
        var img=$(this).attr("src");
        // alert(img);
        $("#img_expand img").attr("src",img);
        $("#img_expand").fadeIn();
        
    })
})