// $(document).ready(function () {

// });

$(".box").click(function () {
    var color = $(this).css("background-color");
    $("body").css("background-color", color);

    $(".box").removeClass("active");
    $(this).addClass("active");
});