var slideshow = new Slideshow({
    backgroundElementId: "bg",
    tickInterval: 10000,
    transitionTime: 500,
});
slideshow.setImages(['./images/background_1.png','./images/bg_2.jpg','./images/bg_6.png','./images/bg_3.jpg',]);
slideshow.run();