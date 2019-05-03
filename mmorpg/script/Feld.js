var Feld = function (y, x) {
    var id = (y*128+x);
    if(x % 2 == 0 && y % 2 == 1 || x % 2 == 1 && y % 2 == 0) {
        $('<span class="feld">').addClass("feld" + id).appendTo("span.break" + y).css("background", "#336633");

    } else {
        $('<span class="feld">').addClass("feld" + id).appendTo("span.break" + y).css("background", "#669966");
    }
};