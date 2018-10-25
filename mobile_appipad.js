/*使用rem*/
var html = document.getElementsByTagName('html')[0],
    body = document.getElementsByTagName('body')[0],
    defaults = {
        baseFontSize: 50,
        maxWidth: 750,
        minWidth: 190
    },
    dataset = html.getAttribute('data'),
    conf = {},
    lastWidth,
    deviceWidth;
for (var key in defaults) {
    if (defaults.hasOwnProperty(key)) {
        conf[key] = defaults[key];
    }
}
for (var key in dataset) {
    if (key in defaults) {
        conf[key] = dataset[key];
    }
}
console.log(conf)

/* 重新调整rem的大小 */
function resizeRem() {
    var curWidth = 0;
    if (!deviceWidth && window.aji && window.aji.getDeviceWidth) {
        deviceWidth = window.aji.getDeviceWidth();
    }
    if (deviceWidth) {
        curWidth = deviceWidth / window.devicePixelRatio;
    } else {
        curWidth = Math.min(screen.availWidth, document.documentElement.clientWidth);
    }
    if (!curWidth || (curWidth == lastWidth)) {
        return;
    }
    if (curWidth > conf.maxWidth) {
        // html.style.cssText = "font-size:" + conf.baseFontSize + "px";
        html.style.cssText = "font-size:" + (curWidth / conf.maxWidth) * conf.baseFontSize + "px";
    } else if (curWidth < conf.minWidth) {
        html.style.cssText = "font-size:" + (conf.minWidth / conf.maxWidth) * conf.baseFontSize + "px";
    } else {
        html.style.cssText = "font-size:" + (curWidth / conf.maxWidth) * conf.baseFontSize + "px";
    }
    lastWidth = curWidth;
}

function bind(o, e, fn) {
    if (o.attachEvent) {
        o.attachEvent('on' + e, fn);
    } else if (o.addEventListener) {
        o.addEventListener(e, fn);
    }
    return this;
}
$(window).on('resize', resizeRem);
body.style.cssText = "width:" + (conf.maxWidth / conf.baseFontSize) + "rem;margin:auto;position:relative";
resizeRem();