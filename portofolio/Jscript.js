function splitScroll(){
    const contoller = new ScrollMagic.Contoller;
    new scrollMagic.Scene({
        duration: 500,
        triggerElment: 'about-title',
    })
    .addIndicators()
    .addTo(contoller);
}



splitScroll();