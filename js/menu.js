function Menu(config) {
    this.nav = ( typeof config.container === 'string')
        ? document.querySelector(config.container) : config.container;
    this.btn = ( typeof config.toggleBtn === 'string')
        ? document.querySelector(config.toggleBtn) : config.toggleBtn;

    var opened = true;
    var _this = this;

    openOrClose();
    checkScreenNav();

    this.btn.addEventListener('click', openOrClose);

    function checkScreenNav() {
        if (window.innerWidth > 920) {
            _this.nav.removeAttribute('style');
            opened = true;
        }
    }

    window.addEventListener('resize', function() {
        checkScreenNav();
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