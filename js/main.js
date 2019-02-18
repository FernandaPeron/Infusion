(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.menu-button',
        widthEnabled: 920
    });

    var carousel = new Carousel({
        container: '.slider .slideshow',
        itens: 'figure',
        prevBtn: '.prev',
        nextBtn: '.next'
    })

    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        prevBtn: '.prev',
        nextBtn: '.next'
    })
})();