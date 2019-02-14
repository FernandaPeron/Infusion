function Menu(config) {
    this.nav = (typeof config.container === 'String') ?
        document.querySelector(config.container) : config.container;
    this.btn = (typeof config.toggleBtn === 'String') ?
        document.querySelector(config.toggleBtn) : config.toggleBtn;
    this.maxWidth = config.widthEnabled || false;

    var opened = false;
    var _this = this;


    function applyStyleToNav(_style) {
        Object.keys(_style).forEach(function(stl) {
            _this.nav.style[stl] = _style[stl];
        });
    }

    function openMenu() {
        var _top = _this.nav.getBoundingClientRect().top + 'px';
        var _style = {
            maxHeight: 'calc(100vh -' + _top + ')',
            overflow: 'hidden'
        };

        applyStyleToNav(_style);

        opened = true;
    }

    function closeMenu() {
        var _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        };

        applyStyleToNav(_style);
        opened = false;
    }

    function openOrClose() {
        if(!opened){
            openMenu();
            return;
        }
        closeMenu();

    }

    this.btn.addEventListener('click', openOrClose)
}