
const $html = $("html");

$html.on("click contextmenu", function(e) {
    // 左クリック
    if (e.which === 1) {
        $html.css("background-color", "#f00");
    }
    // 右クリック
    else if (e.which === 3) {
        $html.css("background-color", "#00f");
    }
    return false;
});



