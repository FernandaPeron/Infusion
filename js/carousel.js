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

}