function Carousel(config){
    this.container = ( typeof config.container === 'string')
        ? document.querySelector(config.container) : config.container;
    this.itens = ( typeof config.itens === 'string')
        ? this.container.querySelectorAll(config.itens) : config.itens;
    this.prevBtn = ( typeof config.prevBtn === 'string')
        ? this.container.querySelector(config.prevBtn) : config.prevBtn;
    this.nextBtn = ( typeof config.nextBtn === 'string')
        ? this.container.querySelectorAll(config.nextBtn) : config.nextBtn;

    var _this = this;
    var _currentSlide = 0;

    init();

    function init(){
        var _show = _this.container.querySelectorAll('.show');

        Array.prototype.forEach.call(_show, function (sh) {
            sh.classList.remove('show')
        });
        _this.itens[0].classList.add('show');

        addListeners()
    }

    function showSlide() {
        var qtdSlides = _this.itens.length;
        var slide = Math.abs(_currentSlide % qtdSlides);
        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }

    function showNextSlide() {
        _currentSlide++;
        showSlide();
    }

    function showPrevSlide() {
        _currentSlide--;
        showSlide();
    }

    function addListeners() {
        _this.nextBtn.addEventListener('click', showNextSlide);
        _this.prevBtn.addEventListener('click', showPrevSlide);
    }

}