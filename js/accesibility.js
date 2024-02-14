document.getElementById('pausar').addEventListener('click', pausarAnimaciones);
function pausarAnimaciones(){
    const barraScroll = document.getElementById('barra-scroll');
    const llama = document.getElementById('llama');
    const star = document.getElementById('star');
    const luna = document.getElementById('luna')
    if(barraScroll.style.animationPlayState === 'running'){
        barraScroll.style.animationPlayState = 'paused';
    }else{
        barraScroll.style.animationPlayState = 'running';
    }
}