var page = 0;

$( document ).ready(function() {
    var item = $("ul.menu").children()[0];
    $("ul.menu").find( item).css( "background-color", "green" );
    $("ul.menu").find( item).css( "color", "white" );
    document.getElementById("main-section").innerHTML= '<object type="text/html" data="./pages/home_page/home.html" id="id_home"></object>';
});
function clkMnu(position){

    switch (position) {
        case 0:
            page = '<object type="text/html" data="./pages/home_page/home.html" id="id_home"></object>';
            break;
        case 1:
            page = '<object type="text/html" data="./pages/products_page/products.html" id="id_products"></object>';
            break;
        default:
            break;
    }
    document.getElementById("main-section").innerHTML= page;
    manageMenuStyle(position);
}

function manageMenuStyle(position){
    var n = $("ul.menu").children().length;
    console.log(n);
    
    for (let index = 0; index < n; index++) {
        $("ul.menu").children().css( "background-color", "rgb(70, 70, 70)" );
        $("ul.menu").children().css( "color", "rgb(189, 189, 189)" );
    }
    var item = $("ul.menu").children()[position];
    $("ul.menu").find( item).css( "background-color", "green" );
    $("ul.menu").find( item).css( "color", "white" );
}