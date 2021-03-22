var slideshow = new Slideshow({
    backgroundElementId: "bg",
    tickInterval: 7000,
    transitionTime: 500,
});
slideshow.setImages(['./images/background_1.jpg','./images/bg_10.jpg','./images/bg_2.jpg','./images/bg_6.png','./images/bg_7.jpg','./images/bg_8.jpg','./images/bg_3.jpg','./images/bg_9.jpg']);
slideshow.run();