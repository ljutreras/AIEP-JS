window.addEventListener('DOMContentLoaded', (e)=>{
    /** con el evento DOMContentLoaded me aseguro que todas las etiquetas HTML fueron cargadas y procesadas por el browser*/
    console.log("hola desde el DOMContentLoaded");

    let boton = document.getElementById("btn-submit");
    boton.addEventListener("click", (ev)=>{
        let nombre = document.getElementById("nombre").value;
        console.log("El nombre del suscriptor es "+nombre);
    });
});