$("#article-1-btn").on("click", () => {
    $(".article-1-text").css("display", "block");
    $(".article-2-text").css("display", "none");
    $(".article-3-text").css("display", "none");
});

$("#article-2-btn").on("click", () => {
    $(".article-1-text").css("display", "none");
    $(".article-2-text").css("display", "block");
    $(".article-3-text").css("display", "none");
});

$("#article-3-btn").on("click", () => {
    $(".article-1-text").css("display", "none");
    $(".article-2-text").css("display", "none");
    $(".article-3-text").css("display", "block");
});