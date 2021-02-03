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
