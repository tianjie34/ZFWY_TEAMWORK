function setRem() {
    let uiW = 1080;
    let winW = document.documentElement.clientWidth || document.body.clientWidth;
    ratio = winW / uiW;
    document.documentElement.style.fontSize = ratio * 10 + "px";
}
setRem();
// 防抖

var timer = null;
window.onresize = () => {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
}

