const tl = gsap.timeline({defaults:{ease: 'power1.out'}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.big-text-box', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

function remove_section() {
    var element = document.getElementById('home-section');
    element.parentNode.removeChild(element);
}

function open_withdrawl() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '';
}

function open_account() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '';
}

function open_about() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '';
}

function open_earn() {
    remove_section();
    var add = document.getElementById("add-section");
    add.innerHTML = '<center><br>  <br><script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=%2FlHrqGKNdepG4uFYTbqyMlWKbZUgNd%2FIt1qWTl2S52M%3D"></script><script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=%2FlHrqGKNdepG4uFYTbqyMlWKbZUgNd%2FIt1qWTl2S52M%3D"></script></center>';
    window.open('http://www.google.com');
}