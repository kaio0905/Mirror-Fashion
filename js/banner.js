var banners = ["mirrorfashion/img/destaque-home.png", "mirrorfashion/img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner(){
    bannerAtual = (bannerAtual + 1) % 2;
    let text =    document.querySelector('.banner-destaque').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 4000);
var controle = document.querySelector('.pause');

controle.onclick = function(){
    if (controle.className === 'pause'){
        clearInterval(timer);
        controle.className = 'play'
    } else{
        timer = setInterval(trocaBanner, 4000)
        controle.className = 'pause'
    }
    return false;
}