var Farbe;
var Klasse;
$(document).ready(function() {
    $("#setValues").on("click", function () {
        Farbe = $("select.Farbe").val();
        Klasse = $("select.Klasse").val();
    });
});