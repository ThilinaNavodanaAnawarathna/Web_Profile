$(window).on("mousemove",function (e) {
    $("#target").css({
        'top':e.pageY - 50,
        'left':e.pageX - 50,
        'position':'absolute'

    });
});

$("#target").click(function () {
   $("#bulet")[0].play();
   $("#shell")[0].play();

});
$(".bird").click(function () {
    $("#bulet")[0].play();
    $("#shell")[0].play();

});


$(window).on("mousemove",function (e) {
    $("#target2").css({
        'top':e.pageY - 50,
        'left':e.pageX - 50,
        'position':'absolute'

    });
});

$("#target2").click(function () {
    $("#bulet2")[0].play();
    $("#shell2")[0].play();

});

$(window).on("mousemove",function (e) {
    $("#target3").css({
        'top':e.pageY - 50,
        'left':e.pageX - 50,
        'position':'absolute'

    });
});

$("#target3").click(function () {
    $("#bulet2")[0].play();
    $("#shell2")[0].play();

});
