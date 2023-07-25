
const $html = $("html");
const $body = $("body");
const $koukandoText = $("#koukando-text");

const kiraiHue = 240;
const sukiHue = 330;

const minKoukando = 0;
const maxKoukando = 10;
let koukando = Math.floor(maxKoukando / 2);

change$bodyBackgroundColor(koukando);

$html.on("click contextmenu", function(e) {
    // 左クリック
    // 好感度が増える
    if (e.which === 1) {
        koukando = Math.min(koukando + 1, maxKoukando);
    }
    // 右クリック
    // 好感度が下がる
    else if (e.which === 3) {
        koukando = Math.max(koukando - 1, minKoukando);
    }
    else {
        return;
    }

    change$bodyBackgroundColor(koukando);

    if (koukando === minKoukando) {
        $koukandoText.text("きらい");
    }
    else if (koukando === maxKoukando) {
        $koukandoText.text("すき");
    }
    else {
        $koukandoText.text("ふつう");
    }

    return false;
});

function change$bodyBackgroundColor(koukando) {
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

