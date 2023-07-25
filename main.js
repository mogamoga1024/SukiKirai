
const $html = $("html");
const $body = $("body");

const kiraiHue = 240;
const sukiHue = 330;

const minKoukando = 0;
const maxKoukando = 10;
let koukando = Math.floor(maxKoukando / 2);

$bodySetBackgroundColor(koukando);

$html.on("click contextmenu", function(e) {
    // 左クリック
    // 好きゲージが増える
    if (e.which === 1) {
        koukando = Math.min(koukando + 1, maxKoukando);
    }
    // 右クリック
    // 嫌いゲージが増える
    else if (e.which === 3) {
        koukando = Math.max(koukando - 1, minKoukando);
    }
    else {
        return;
    }

    $bodySetBackgroundColor(koukando);

    return false;
});

function $bodySetBackgroundColor(koukando) {
    const hue = koukandoToHue(koukando);
    const hsl = `hsl(${hue}, 100%, 80%)`;
    $body.css("background-color", hsl);
}

function koukandoToHue(koukando) {
    if (koukando < minKoukando || koukando > maxKoukando) {
        throw new Error("好感度が範囲外")
    }

    if (koukando === minKoukando) {
        return kiraiHue;
    }
    else if (koukando === maxKoukando) {
        return sukiHue;
    }
    else {
        return kiraiHue + (sukiHue - kiraiHue) * (koukando / (maxKoukando - minKoukando));
    }
}

