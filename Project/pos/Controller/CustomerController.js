$("#btnsave").click(function () {
    var name=$("#cusname").val();
    var id=$("#cusid").val();
    var address=$("#Address").val();
    var contact=$("#contact").val();

    // $("#table").append("<tr> <td>"+id+"</td> <td>"+name+"</td> <td>"+address+"</td> <td>"+contact+"</td> </tr>");
    var customer=new Customer(id,name,address,contact);
    customerTable.push(customer);
    // $("#table").append("<tr> <td>"+id+"</td> <td>"+name+"</td> <td>"+address+"</td> <td>"+contact+"</td> </tr>");
    loadTable();
    clear();



    $("#table").children('tr').click(function () {
        var id=$($(this).children()[0]).text();
        var name=$($(this).children()[1]).text();
        var address=$($(this).children()[2]).text();
        var contact=$($(this).children()[3]).text();


        $("#cusid").val(id);
        $("#cusname").val(name);
        $("#Address").val(address);
        $("#contact").val(contact);




    });
    $("#table").children('tr').on("dblclick",function () {
        $(this).fadeOut(2000);
        clear();
    });

});
function clear() {
    $("#cusname").val("");
    $("#cusid").val("");
    $("#Address").val("");
    $("#contact").val("");

}
function loadTable() {
    $("#table").children('tr').remove();


    for (var v = 0; v < customerTable.length; v++) {
        $("#tblitem").append("<tr> <td>" + customerTable[v].getCusId() + "</td> <td>" + customerTable[v].getName() + "</td> <td>" + customerTable[v].getCusAddress() + "</td> <td>" + customerTable[v].getCusContact() + "</td> </tr>");
    }
}

