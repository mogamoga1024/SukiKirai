
const $html = $("html");
const $body = $("body");

$html.on("click contextmenu", function(e) {
    // 左クリック
    if (e.which === 1) {
        // $body.css("background-color", "#f00");
    }
    // 右クリック
    else if (e.which === 3) {
        // $body.css("background-color", "#00f");
    }
    return false;
});



