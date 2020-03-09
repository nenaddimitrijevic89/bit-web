$(function () {
    for (var i = 0; i < 2; i++) {
        var div = $("<div>");
        $("body").prepend(div);
    }
    var images = ["images/player1.jpg", "images/player2.jpg", "images/player3.jpg", "images/player4.jpg", "images/player5.jpg", "images/player6.jpg"]
    var first = $("div:first").addClass(".first-div");
    var second = $("div:last").addClass(".second-div");
    for (var i = 0; i < images.length; i++) {
        var img = $("<img>");
        img.attr("src", images[i]);
        if (i < 3) {
            first.append(img);
        } else {
            second.append(img);
        }
    }
    var redBorder = $("img:first").addClass("selected");
    redBorder.removeClass("selected");
    var middle = redBorder.parent(first).next(second).children("img:odd").addClass("selected");
    var title = $("<h1>Players</h1>");
    $("body").prepend(title);
    setInterval(function () { title.fadeOut(1000).fadeIn(1000) }, 1000)
    setInterval(function () { middle.fadeOut(1000).fadeIn(1000) }, 1000)
})