console.log(1);
function onClickMat(){
    getAllMat(function (data) {
        $("#catalogs").text(data[1].name);
    }, function () {

    })
}

function getAllMat(success,error) {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        cache: false,
        url: "/catalogs/mats",
        success: success,
        error: error
    });
}
function drop_button(){
    alert($("#selText").val());
}
function changeCatal(){
    $('#catal').on('change.select2', function (e) {
        var data = e.params.data;
        console.log(data);
    });
}