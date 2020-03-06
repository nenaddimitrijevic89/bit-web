$(function () {
    console.log("Hello, world!")
});

$("ul>li:first").addClass("bottom-border");
$("ul").addClass("touppercase");
$("li:first").addClass("active");
$("li:even:not(li:first)").addClass("background");
$("ul").addClass("text-center");
$("body").addClass("bodyCenter");
setInterval((function () { $("li:first").fadeIn(2500).fadeOut(1000) }), 1000);

