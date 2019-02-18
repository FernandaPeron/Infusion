function Menu(config) {
    this.nav =  document.getElementsByClassName(config.container).item(0);
    this.btn = document.getElementsByClassName(config.toggleBtn).item(0);

    var opened = false;
    var _this = this;

    closeMenu();

    this.btn.addEventListener('click', openOrClose);

    function openOrClose() {
        if(!opened){
            openMenu();
            return;
        }
        closeMenu();

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


    function closeMenu() {
        var _style = {
            maxHeight: '0px',
            overflow: 'hidden'
        };

        applyStyleToNav(_style);
        opened = false;
    }

}