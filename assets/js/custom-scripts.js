//sidenav toggle
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
// ---------
// aos animation 
AOS.init();
// ---------