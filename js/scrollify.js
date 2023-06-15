$(function () {
    $.scrollify({
        section: "section",
        easing:"linear",
        scrollbars: true,
        setHeights: false,
        updateHash: false,
        overflowScroll: false,
        touchScroll: true,
        scrollSpeed: 600,
        before: function (){
            if($("#home")){
                if(!$.scrollify.current().hasClass("home")){
                    $("#home").css("margin-top", "120px")
                }
                else if ($.scrollify.current().hasClass("home")){
                    $("#home").css("margin-top", "0")
                }
            }
        }
    });
});
