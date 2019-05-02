var FeldArray = [];

window.onload = function() {
    createField();
};
window.addEventListener("resize", resizeFields);
$(window).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', resizeFields());

function createField() {
    for(var i = 0; i < 72; i++) {
        $("<span>").addClass("breaks break" + i).appendTo("#main");
        for(var j = 0; j < 128; j++) {

            FeldArray.push(new Feld(i,j));
        }
        $("</span>").appendTo("#main");
    }
    resizeFields()
}

function resizeFields() {
    var windowWidth = $(window).width(),
        windowHeight = $(window).height();
    var width = windowWidth / 128;
    var height = windowHeight / 72;

    for (let i = 0; i < $("div#main").children().length; i++) {
        let child = $("div#main").children()[i];
        for (let j = 0; j < child.children.length; j++) {
            let innerChild = child.children[j];
            innerChild.style.width =  width.toString() + "px";
            innerChild.style.height = height.toString() + "px";
        }
    }
}

