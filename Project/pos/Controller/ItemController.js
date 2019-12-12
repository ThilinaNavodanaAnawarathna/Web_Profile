$("#itmsave").click(function () {
    var code=$("#itmid").val();
    var description=$("#itmname").val();
    var unitprice=$("#itmprice").val();
    var qty=$("#itmqty").val();


    var item=new Item(code,description,unitprice,qty);
    itemTable.push(item);


    loadTable();

    // $("#tblitem").append("<tr> <th>"+code+"</th> <td>"+description+"</td> <td>"+unitprice+"</td> <td>"+qty+"</td> </tr>");

    clear();

    $("#tblitem").children('tr').click(function () {
        var code=$($(this).children()[0]).text();
        var description=$($(this).children()[1]).text();
        var unitprice=$($(this).children()[2]).text();
        var qty=$($(this).children()[3]).text();

        $("#itmid").val(code);
        $("#itmname").val(description);
        $("#itmprice").val(unitprice);
        $("#itmqty").val(qty);
    });
    $("#tblitem").children('tr').on("dblclick",function () {
       $(this).fadeOut(2000);
       clear();
    });


});
function clear() {
    $("#itmid").val("");
    $("#itmname").val("");
    $("#itmprice").val("");
    $("#itmqty").val("");
}

function loadTable() {
    $("#tblitem").children('tr').remove();


    for (var v=0;v<itemTable.length;v++){
        $("#tblitem").append("<tr> <td>"+itemTable[v].getCode()+"</td> <td>"+itemTable[v].getDescription()+"</td> <td>"+itemTable[v].getUnitprice()+"</td> <td>"+itemTable[v].getQty()+"</td> </tr>");
    }

}