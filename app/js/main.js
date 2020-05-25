var buttonPlay = document.querySelector('.video__play'),
    player = document.getElementById('player');

    buttonPlay.addEventListener('click', function(){
        buttonPlay.setAttribute('class', '--d-none');
        player.setAttribute('class', '');
        player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    })

var buttonTab = document.querySelectorAll('.column-item__btn');
buttonTab.addEventListener('click', function(){
    alert('click')
})