'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)
document.getElementById('font-button').addEventListener('click', changeFont)

function changeColor() {
    console.log('Button clicked!'); // feel free to change/delete this line

    // 色をランダムで設定
    const color = { r: 0, g: 0, b: 0 }; // RGB 0～255の値で設定
    for (const i in color) {
        color[i] = Math.floor(Math.random() * 256);
    }
    const randomColor = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
    console.log(randomColor);

    document.getElementById("page").style.backgroundColor = randomColor;

}

function changeFont() {
    console.log('Button clicked!'); // feel free to change/delete this line

    // font sizeをランダムで設定
    const font = Math.floor(Math.random() * 80);

    const randomFont = font + "pt";
    console.log(randomFont);

    document.getElementById("page").style.fontSize = randomFont;

}
