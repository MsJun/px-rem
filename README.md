window.addEventListener(('orientationchange' in window ? 'orientationchange' : 'resize'), (function() {//判断是屏幕旋转还是resize
        function c() {
            var d = document.documentElement;//获取html元素
            var cw = d.clientWidth || 750;
            d.style.fontSize = (40 * (cw / 640)) > 40 ? 40 + 'px' : (40 * (cw / 640)) + 'px';//以640和750的设计稿为案例html的font字号分别为40px、50px
        }
        c();
        return c;
    })(), false);
