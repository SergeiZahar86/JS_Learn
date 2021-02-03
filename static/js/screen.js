
$ (document).ready(function() {
    // var canvas = document.getElementById('canvas-image'),
    //     context = canvas.getContext('2d');
    //
    // // resize the canvas to fill browser window dynamically
    // window.addEventListener('resize', resizeCanvas, false);
    //
    // function resizeCanvas() {
    //     canvas.width = window.innerWidth-50;
    //     canvas.height = window.innerHeight;
    //
    //     /**
    //      * Your drawings need to be inside this function otherwise they will be reset when
    //      * you resize the browser window and the canvas goes will be cleared.
    //      */
    //     drawStuff();
    // }
    // resizeCanvas();
    //
    // function drawStuff() {
    //     refresh();
    // }
    drawScreen();
    refresh();
});

function refresh() {
    setTimeout (drawScreen, 2000);
}

function drawScreen() {
    var canvas = document.getElementById('canvas-image');
    var ctx = canvas.getContext('2d');
    var img = new Image;
    img.onload = function(){
        var sizeW = img.naturalWidth / 1.1;
        var sizeH = img.naturalHeight / 1.1;
        canvas.width = sizeW;
        canvas.height = sizeH;
        // var ratio = img.naturalWidth / img.naturalHeight;
        // var scale = scale / 1.2;
        ctx.drawImage(img,0,0, sizeW, sizeH); // Or at whatever offset you like
        // ctx.drawImage(img,0,0, myCanvas.offsetWidth, myCanvas.offsetHeight ); // Or at whatever offset you like
    };
    img.src = "/screen/1";
    // console.log(img.clientWidth+ " " +img.clientHeight)
    // img.width;
    // img.height;

    refresh();
}