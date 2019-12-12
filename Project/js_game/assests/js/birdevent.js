var bird;
var mbird;
var score=0;
var leval1=0;
var leval2=0;
var leval3=0;
$(".bird").children('.into').click(function () {
    bird=this;
    mbird=$(this).parent();

    score++;

    $("#bulet")[0].play();
    $("#shell")[0].play();
    $("#birdsound")[0].play();
    $(this).css({"display":"none"});
    $(this).parent().css({"display":"none"});



    setTimeout(display,100);




});

function display() {

    $(bird).css({"display":"block"});
    $(mbird).css({"display":"block"});
    $(".score2").text("SCORE : "+score);

}

