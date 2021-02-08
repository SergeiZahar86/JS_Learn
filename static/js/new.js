$(document).ready(function () {
    var catalogs = [
        "Справочник материалав", "Справочник причин неаттестации", "Справочник контрагентов",
    ];
    $("#catal").select2({
        data: catalogs
    });
    console.log("2");
    //alert("hello");
    changeCatal();
    //hideElement('tab1');
    //prompt("how are you");
});

function changeCatal() {
    $('#catal').on("select2:select", function (e) {
        var select_val = $(e.currentTarget).val();
        console.log(select_val);
        if(select_val === "Справочник материалав"){
            showElement('tab1');
        }
        console.log("4");
    });
}
