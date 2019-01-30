// $( document ).ready(function() {
//     $("#menu-start").click(function() {
//         //alert('test');
//         // $("#main-section").load("./pages/home.html");
        
//     });
// });

function clkHome(){
    document.getElementById("main-section").innerHTML=
    '<object type="text/html" data="./pages/home.html" id="id_home"></object>';
    manageMenuStyle();
}

function manageMenuStyle(){
    var n = $("ul.menu").children().length;
    console.log(n);
    
    for (let index = 0; index < n; index++) {
        //const element = array[index];
        
    }
    $("menu-start").css("background-color") = "green";
    //$("menu-start").style.color = "white";
}