const tl = gsap.timeline({defaults:{ease: 'power1.out'}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.big-text-box', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");

var links = [ //19
    'https://cb.run/4rQs', 'https://cb.run/9MGY', 'https://cb.run/GhAN', 'https://cb.run/mVtg', 'https://cb.run/ROnp', 'https://cb.run/8KuT',
    'https://cb.run/9KnF', 'https://cb.run/EeX7', 'https://cb.run/hoj0', 'https://inorangepie.biz/12956821', 'https://r.honeygain.money/REIUT0A0',
    'https://2captcha.com?from=8848127', 'https://www.submithub.com/by/gsp', 'https://clicksgenie.com/register.aspx?u=37232', 'https://surfe.be/ext/290563',
    'https://radioearn.com/?ref=31176', 'http://www.fiverr.com/s2/35d0de1b44', 'http://join-shortest.com/ref/6570218369?user-type=new',
    'https://freebitco.in/?r=23418056', 'https://cash-ads.com/?ref=3948',
]

var ads1 = [ //15
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=sPyarndwNnA%2Fgq7KE1YZYumRA6e%2FQAuNGxmiwENWBfI%3D"></script>',
    '<iframe src="https://get.cryptobrowser.site/pb/6/12956821/?t=simple,text,pro,mobile" style="width: 728px; height: 90px" frameborder="no"></iframe>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_10.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_9.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=d2MTccXpmttab39zhV23%2FXh6VGQQ4nboSKnm2hKlucM%3D"></script>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_8.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_5.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=NWRZsoI7nI800B%2BgWBHklxL%2BwbGVGsISM9ZUaQOUM6I%3D"></script>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_11.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_7.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_6.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=CiJLUD%2Fy6R4ps0babwsIzu8MwfQmLiabEHMvIujo0UQ%3D"></script>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_4.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_3.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=qWsot6ruKHHHWSXRShr3xk1a8ofuZ9NOuEelTKaMD7M%3D"></script>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_1.gif" alt="Surfe.be - Banner advertising service"></a>',
]

var ads2 = [ //10
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_10.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<iframe src="https://get.cryptobrowser.site/pb/4/12956821/?t=simple,text,pro,mobile" style="width: 300px; height: 250px" frameborder="no"></iframe>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_9.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_8.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_11.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_7.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_6.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_1.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=1NBdqg%2BhbGYUXCoe1iCHw8jUwXiWCVTmcbxHApSIwU0%3D"></script>',
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=1NBdqg%2BhbGYUXCoe1iCHw8jUwXiWCVTmcbxHApSIwU0%3D"></script>',
    '<script type="text/javascript" src="https://g.Cash-Ads.com/banner/?code=1NBdqg%2BhbGYUXCoe1iCHw8jUwXiWCVTmcbxHApSIwU0%3D"></script>',
]

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
    random_num = Math.floor((Math.random() * 10) + 0);
    link = links[random_num];
    ad1 = ads1[random_num];
    ad2 = ads2[random_num];
    ad3 = ads2[random_num + 1];
    add.innerHTML = '<center><br><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLj1jjqEw6eMuMsoGykrygkBgVarXYN0Pu&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>' + ad1 + '<br><button class="home-button" style="top: 90%;" onclick="stop_earn()">Stop Earning</button></center>';
    window.open(link);
    timer();
}
function stop_earn() {
    location.reload();
}
function timer() {
    
    add_tickets()
}
function add_tickets() {
    tickets = tickets + 2;
    var add = document.getElementById("ticket_num");
    add.innerHTML = tickets;
    timer();
}