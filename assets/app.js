const tl = gsap.timeline({defaults:{ease: 'power1.out'}});

tl.to('.text', {y:"0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y:"-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.big-text-box', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('.home-button2', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 1});

var links = [ //72
    'https://cb.run/4rQs',
    'https://crlt.co/9tuQ',
    'https://cb.run/9MGY',
    'https://crlt.co/9tuQ',
    'https://csgofly.com/r/gsp',
    'https://cb.run/GhAN',
    'https://cb.run/mVtg',
    'https://cb.run/ROnp',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://cash-ads.com/?ref=3948',
    'https://jpconstruction.altervista.org',
    'https://cb.run/9KnF',
    'https://app.stormgain.com/friend/BNS14280379',
    'https://crlt.co/9tuQ',
    'https://cb.run/EeX7',
    'https://cb.run/hoj0',
    'https://inorangepie.biz/12956821',
    'https://crlt.co/9tuQ',
    'https://clicksgenie.com/register.aspx?u=37232',
    'http://adsgamer.altervista.org/miner.html',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://app.stormgain.com/friend/BNS14280379',
    'https://r.honeygain.money/REIUT0A0',
    'http://adsgamer.altervista.org/miner.html',
    'http://adsgamer.altervista.org',
    'https://crlt.co/9tuQ',
    'https://2captcha.com?from=8848127',
    'http://adsgamer.altervista.org/miner.html',
    'https://crlt.co/9tuQ',
    'https://www.submithub.com/by/gsp',
    'https://www.joingiveaways.com/miner.php?u=76561198869571841',
    'https://surfe.be/ext/290563',
    'https://freebitco.in/?r=23418056',
    'https://crlt.co/9tuQ',
    'https://radioearn.com/?ref=31176',
    'http://adsgamer.altervista.org/miner.html',
    'https://crlt.co/9tuQ',
    'http://www.fiverr.com/s2/35d0de1b44',
    'http://join-shortest.com/ref/6570218369?user-type=new',
    'https://cb.run/8KuT',
    'https://app.stormgain.com/friend/BNS14280379',
    'https://cash-ads.com/?ref=3948',
    'https://crlt.co/9tuQ',
    'https://www.rollbit.com/r/gsp',
    'https://crlt.co/9tuQ',
    'https://yllix.com/388948/',
    'https://crlt.co/9tuQ',
    'https://crlt.co/9tuQ',
    'https://crypto-loot.com/ref.php?go=27e53831e7e7e9403c8ccda236435ac0',
    'https://crlt.co/9tuQ',
    'https://www.instagram.com/giosaia',
    'https://www.instagram.com/amagliett',
    'https://www.instagram.com/soothinglooks',
    'https://crlt.co/9tuQ',
    'https://app.stormgain.com/friend/BNS14280379',
    'https://www.instagram.com/robertodidio_1',
    'http://adsgamer.altervista.org/miner.html',
    'https://app.stormgain.com/friend/BNS14280379',
]

var ads1 = [ //23
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=728x90&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/728x90.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<iframe src="https://get.cryptobrowser.site/pb/6/12956821/?t=simple,text,pro,mobile" style="width: 728px; height: 90px" frameborder="no"></iframe>',
    '<a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub_c6lers.png" width="728" height="90" border="0" alt="Monetize your website traffic with yX Media" title="Monetize your website traffic with yX Media" /></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_10.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_9.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=728x90&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/728x90.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Leaderboard.gif" alt="ESFaucets" /></a>',
    '<a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub_upk7x1.png" width="728" height="90" border="0" alt="Monetize your website traffic with yX Media" title="Monetize your website traffic with yX Media" /></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_8.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_5.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=728x90&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/728x90.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Leaderboard.gif" alt="ESFaucets" /></a>',
    '<a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub_vs2thi.png" width="728" height="90" border="0" alt="yX Media - Monetize your website traffic with us" title="yX Media - Monetize your website traffic with us" /></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_11.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_7.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_6.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=728x90&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/728x90.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Leaderboard.gif" alt="ESFaucets" /></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_4.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_3.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=728x90&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/728x90.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Leaderboard.gif" alt="ESFaucets" /></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/728x90_1.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=728x90&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/728x90.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
]

var ads2 = [ //21
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_10.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<iframe src="https://get.cryptobrowser.site/pb/4/12956821/?t=simple,text,pro,mobile" style="width: 300px; height: 250px" frameborder="no"></iframe>',
    '<a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub_7nc2s6.png" width="300" height="250" border="0" alt="yX Media - Monetize your website traffic with us" title="yX Media - Monetize your website traffic with us" /></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=300x250&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/300x250.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Square2.gif" alt="ESFaucets" /></a>',
    '<a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub_s9c2nm.png" width="300" height="250" border="0" alt="Monetize your website traffic with yX Media" title="Monetize your website traffic with yX Media" /></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=300x250&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/300x250.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_9.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_8.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Square2.gif" alt="ESFaucets" /></a>',
    '<a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub_zecyzp.png" width="300" height="250" border="0" alt="Monetize your website traffic with yX Media" title="Monetize your website traffic with yX Media" /></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=300x250&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/300x250.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_11.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_7.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Square2.gif" alt="ESFaucets" /></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=300x250&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/300x250.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_6.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<a href="https://surfe.be/ext/290563" target="_blank"><img src="https://static.surfe.be/images/banners/en/300x250_1.gif" alt="Surfe.be - Banner advertising service"></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=300x250&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/300x250.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Square2.gif" alt="ESFaucets" /></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=300x250&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/300x250.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
    '<a href="https://es.btcnewz.com/auth/register?ref=c6332011cb628dcceb5b"><img src="https://es.btcnewz.com/banners/Square2.gif" alt="ESFaucets" /></a>',
    '<script type="text/javascript" src="https://uprimp.com/bnr.php?section=General&pub=388948&format=300x250&ga=g"></script><noscript><a href="https://yllix.com/publishers/388948" target="_blank"><img src="//ylx-aff.advertica-cdn.com/pub/300x250.png" style="border:none;margin:0;padding:0;vertical-align:baseline;" alt="ylliX - Online Advertising Network" /></a></noscript>',
]

var balance = 0;
localStorage.getItem("tickets");
if (localStorage.getItem("tickets") == null) {
    balance = 0;
    localStorage.setItem("tickets", balance);
}
else {
    var lcl = localStorage.getItem("tickets");
    balance = JSON.parse(lcl);
}
var add_tickets = document.getElementById("ticket_num");
add_tickets.innerHTML = balance;


function remove_section() {
    var element = document.getElementById('home-section');
    element.parentNode.removeChild(element);
}
function remove_nav() {
    var element = document.getElementById('nav');
    element.parentNode.removeChild(element);
}
function remove_footer() {
    var element = document.getElementById('footer');
    element.parentNode.removeChild(element);
}
function open_tickets() {
    remove_section();
    remove_nav();
    remove_footer();
    var add = document.getElementById("add-section");
    random_num = Math.floor((Math.random() * 23) + 0);
    ad1 = ads1[random_num];
    ad2 = ads1[random_num + 1];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">TicketPool</a></h1><div id="earn_balance">' + balance + '</div><br><br>' + ad1 + '<br><h1>Purchase Tickets</h1><br><div class="columns"><ul class="price"><li class="header">20 tickets</li><li class="grey">$0,10</li><li class="grey"><a href="#" class="button">Purchase</a></li></ul></div><div class="columns"><ul class="price"><li class="header">100 tickets</li><li class="grey">$0,50</li><li class="grey"><a href="#" class="button">Purchase</a></li></ul></div><div class="columns"><ul class="price"><li class="header">200 tickets</li><li class="grey">$1,00</li><li class="grey"><a href="#" class="button">Purchase</a></li></ul></div><div class="columns"><ul class="price"><li class="header">1.500 tickets</li><li class="grey">$5,00</li><li class="grey"><a href="#" class="button">Purchase</a></li></ul></div><div class="columns"><ul class="price"><li class="header">3.500 tickets</li><li class="grey">$10,00</li><li class="grey"><a href="#" class="button">Purchase</a></li></ul></div><div class="columns"><ul class="price"><li class="header">20.000 tickets</li><li class="grey">$50,00</li><li class="grey"><a href="#" class="button">Purchase</a></li></ul></div><br>' + ad2 + '<br><br></center>';
}
function open_account() {
    remove_section();
    remove_nav();
    remove_footer();
    var add = document.getElementById("add-section");
    localStorage.getItem("email"); //import email
    if (localStorage.getItem("email") == null) {
        
    }
    else {
        var email = localStorage.getItem("email");
    }
    localStorage.getItem("tot_points"); //import total points
    if (localStorage.getItem("tot_points") == null) {
        var tot_points = 0;
        localStorage.setItem("tot_points", tot_points);
    }
    else {
        var tot_points = localStorage.getItem("tot_points");
    }
    localStorage.getItem("tot_wins"); //import total wins
    if (localStorage.getItem("tot_wins") == null) {
        var tot_wins = 0;
        localStorage.setItem("tot_wins", tot_wins);
    }
    else {
        var tot_wins = localStorage.getItem("tot_wins");
    }
    random_num = Math.floor((Math.random() * 23) + 0);
    ad1 = ads1[random_num];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">TicketPool</a></h1><br><br><br><h2>Email:<br><b>' + email + '</b></h2><br><br><h1>Payment Preferences</h1><br><br><h2>Total Earned Points:<br><b id="tot_points"></b></h2><br><h2>Total Winning Tickets:<br><b id="num_winning_tickets"></b></h2><br><br>' + ad1 + '<br><br></center>';
}
function open_about() {
    remove_section();
    remove_nav();
    remove_footer();
    var add = document.getElementById("add-section");
    add.innerHTML = '';
}
function open_earn() {
    remove_section();
    remove_nav();
    var add = document.getElementById("add-section");
    random_num = Math.floor((Math.random() * 23) + 0);
    link = links[random_num];
    ad1 = ads1[random_num];
    add.innerHTML = '<center><button class="back-button" onclick="back_home()">Back</button><h1 id="logo"><a href="./index.html">TicketPool</a></h1><div id="earn_balance">' + balance + '</div><iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLj1jjqEw6eMuMsoGykrygkBgVarXYN0Pu&index=' + random_num + '&autoplay=1&mute=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>' + ad1 + '<button class="home-button" style="top: 85%;" onclick="back_home()">Stop Earning</button></center>';
    window.open(link);
    tickets();
}
function back_home() {
    location.reload();
}
function tickets() {
    var add = document.getElementById("earn_balance");
    balance = balance + 2;
    setTimeout(() => {
        localStorage.setItem("tickets", balance);
        add.innerHTML = balance;
        tickets();
    }, 600000);
    
}