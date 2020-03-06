$(function () {
    $("body").on("click", function (event) {
        $("img").css({ "top": event.clientY + "px", "left": event.clientX + "px" });
    })
    $("button").on("click", function (event) {
        $("body").off("click");
    })

})