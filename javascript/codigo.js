console.log("se carga el codigo" );
window.addEventListener("DOMContentLoaded", (Event) =>{
    console.log("DOM completamente cargado y procesando");

    const menuBtn=document.getElementById("menu");
    const nav =document.querySelector("div nav");
    const boby=document.querySelector("body");

    menuBtn.addEventListener("click", (Event) =>{
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
        boby.classList.toggle("no-scroll");
    });
});
