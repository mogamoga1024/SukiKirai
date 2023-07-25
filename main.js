
const $html = $("html");
const $body = $("body");

const kiraiHue = 240;
const sukiHue = 330;
let hue = (kiraiHue + sukiHue) / 2;

$bodySetBackgroundColor(hue);

$html.on("click contextmenu", function(e) {
    // 左クリック
    // 好きゲージが増える
    if (e.which === 1) {
        hue = Math.min(hue + 10, sukiHue);
    }
    // 右クリック
    // 嫌いゲージが増える
    else if (e.which === 3) {
        hue = Math.max(hue - 10, kiraiHue);
    }
    else {
        return;
    }

    $bodySetBackgroundColor(hue);

    return false;
});

function $bodySetBackgroundColor(hue) {
    const hsl = `hsl(${hue}, 100%, 80%)`;
    $body.css("background-color", hsl);
}

