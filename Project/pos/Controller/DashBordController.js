$("#orderform").hide();
$("#itemform").hide();
$("#customerform").hide();


$("#linkorders").click(function(){

    $("#customerform").hide();
    $("#itemform").hide();
    $("#orderform").show();
    // alert("Welcome Order Form.");

});

$("#linkcustomer").click(function(){

    $("#orderform").hide();
    $("#itemform").hide();
    $("#customerform").show();
    // alert("Welcome Customer Form.");


});

$("#linkitem").click(function(){

    $("#customerform").hide();
    $("#orderform").hide();
    $("#itemform").show();
    // alert("Welcome Item Form.");

});
