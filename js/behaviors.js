$(document).ready(function(){
    $(".prev-verse a").click(function(){
        var img = $(this).find("img").attr("src");
        
        $("body").css('overflow', 'hidden');
        $(".lightbox").fadeIn();
        $(".modal img").attr("src", img);        
        $(document).on('keydown', function (e) {
            if (e.keyCode === 27) { // ESC
                $(".lightbox").fadeOut();
                $("body").css('overflow', 'auto');
            }
        });
    });
});