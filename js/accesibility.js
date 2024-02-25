document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("pausar").addEventListener('click', pausarAnimaciones);
    document.getElementById("play").addEventListener('click', playAnimations);
})


function pausarAnimaciones() {
    document.getElementById("pausar").classList.toggle("ocultar");
    document.getElementById("play").classList.toggle("ocultar");
    document.getElementById("loader").classList.toggle("quitar-animacion");
    document.getElementById("llama").classList.toggle("pausar-animacion");
    document.getElementById("luna").classList.toggle("pausar-animacion");
    document.querySelector(".astronauta").classList.toggle("pausar-animacion");
    document.querySelector("h1").classList.toggle("pausar-animacion");

    const stars = document.querySelectorAll("#star");
    stars.forEach(star=>{
        star.classList.toggle("quitar-animacion");
    });

    const elementosAnimados = document.querySelectorAll("#elemento-animado");
    elementosAnimados.forEach(element=>{
        element.classList.toggle("pausar-animacion");
    });

    const imagenesAnimados = document.querySelectorAll("#img");
    imagenesAnimados.forEach(element=>{
        element.classList.toggle("pausar-animacion");
    });

    const sections = document.querySelectorAll("section");
    sections.forEach(section=>{
        section.classList.toggle("quitar-animacion");
    });

    const audio = document.querySelector(".audio");
    audio.classList.toggle("quitar-transition");
    audio.classList.toggle("audio-shadow");

    const video = document.querySelector("video");
    video.classList.toggle("quitar-transition");
    document.querySelector(".box-video").classList.toggle("video-shadow");
    document.querySelector("p").classList.toggle("p-sin-hover");
    document.querySelector(".menu").classList.toggle("ocultar");

    const imagenes = document.querySelectorAll(".slider img");
    imagenes.forEach((element)=>{
        if(element.src.includes("gif")){
            element.src =  "imagenes/universe-1057270_1280 (1).jpg";
            element.alt = "universo";
        }
    });
}

function playAnimations() {
    document.getElementById("pausar").classList.toggle("ocultar");
    document.getElementById("play").classList.toggle("ocultar");
    document.getElementById("loader").classList.toggle("quitar-animacion");
    document.getElementById("llama").classList.toggle("pausar-animacion");
    document.getElementById("luna").classList.toggle("pausar-animacion");
    document.querySelector(".astronauta").classList.toggle("pausar-animacion");
    document.querySelector("h1").classList.toggle("pausar-animacion");

    const stars = document.querySelectorAll("#star");
    stars.forEach(star=>{
        star.classList.toggle("quitar-animacion");
    });

    const elementosAnimados = document.querySelectorAll("#elemento-animado");
    elementosAnimados.forEach(element=>{
        element.classList.toggle("pausar-animacion");
    });

    const imagenesAnimados = document.querySelectorAll("#img");
    imagenesAnimados.forEach(element=>{
        element.classList.toggle("pausar-animacion");
    });

    const sections = document.querySelectorAll("section");
    sections.forEach(section=>{
        section.classList.toggle("quitar-animacion");
    });

    const audio = document.querySelector(".audio");
    audio.classList.toggle("quitar-transition");
    audio.classList.toggle("audio-shadow");

    const video = document.querySelector("video");
    video.classList.toggle("quitar-transition");
    document.querySelector(".box-video").classList.toggle("video-shadow");
    document.querySelector("p").classList.toggle("p-sin-hover");
    document.querySelector(".menu").classList.toggle("ocultar");
}


