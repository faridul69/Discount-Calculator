
$("#dis_type").change(function(){
    var dis_type =$("#dis_type").val();
  
    if(dis_type=="percent")
    {
        $("#total_discount").removeClass("d-none");
        // document.getElementById("dLabel").textContent="Discount Percentage"
        $("#dLabel").text("Discount Percentage");
        $("#mainDiv").removeClass("bg-success");
        $("#mainDiv").addClass("bg-primary");
    }
    else
    {
        $("#total_discount").addClass("d-none");
        // document.getElementById("dLabel").textContent="Discount Amount"
        $("#dLabel").text("Discount Amount");
        $("#mainDiv").addClass("bg-success");
        $("#mainDiv").removeClass("bg-primary");
        // $("#mainDiv").removeClass("bg-success");
        // $("#mainDiv").removeClass("bg-primary");
        // $("#mainDiv").addClass("bg-info");
    }
})



$("#calculate").click(function (e)
{
    e.preventDefault();

    var totalAmount = $("#totalAmount").val();
    x = parseFloat(totalAmount);
    var discountAmount = $("#discountAmount").val();
    y = parseFloat(discountAmount);


    disType=$("#dis_type").val()
    console.log(disType);

    if(disType=="fixed")
    {
    var total = x - y;
    $("#total").val(total);
    }
    else
    {   
        var tDis=x*y/100;
        var total2=x-tDis;
        $("#t_discountAmount").val(tDis);
        $("#total").val(total2);

    }
})

// $("#reset").click(function(event){
//     event.preventDefault();
//     $("#totalAmount").val(" ");
//     $("#total").val(" ");
//     $("#discountAmount").val(" ");
//     // $("#dis_type").val("Select");
// })