function Menu(config) {
    this.nav =  document.getElementsByClassName(config.container).item(0);
    this.btn = document.getElementsByClassName(config.toggleBtn).item(0);

    var opened = false;
    var _this = this;

    closeMenu('0px', 'unset');

    this.btn.addEventListener('click', openOrClose);

    window.addEventListener('resize', function() {
        if(window.innerWidth > 920) {
            _this.nav.removeAttribute('style');
            opened = true;
        }
    });

    function openOrClose() {
        if(!opened){
            openMenu();
            return;
        }
        closeMenu('0px', 'hidden');
    }

    function openMenu() {
        var _top = _this.nav.getBoundingClientRect().top + 'px';
        var _style = {
            maxHeight: 'calc(100vh - ' + _top + ')',
            overflow: 'hidden'
        };

        applyStyleToNav(_style);

        opened = true;
    }

    function applyStyleToNav(_style) {
        Object.keys(_style).forEach(function(stl) {
            _this.nav.style[stl] = _style[stl];
        });
    }

    function closeMenu(height, overflow) {
        var _style = {
            maxHeight: height,
            overflow: overflow
        };

        applyStyleToNav(_style);
        opened = false;
    }

}