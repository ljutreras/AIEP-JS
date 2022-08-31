window.addEventListener('DOMContentLoaded',(e)=>{
    const boton = document.querySelector("#contacto");
    boton.addEventListener('click', (ev)=>{
        //TODO crear funcionalidad





    });

    





})

async function guardarUsuario(suscriptor){

    const url = "https://proyectoaiep-842fb-default-rtdb.firebaseio.com/registro.json";
    const respuesta = await fetch(url, {
        method: "POST",
        body: JSON.stringify(suscriptor)
    });
    const data = await respuesta.json();
}