window.addEventListener('DOMContentLoaded', (e)=>{  //Funcion para cargar el contenido del DOM
    
    /** con el evento DOMContentLoaded me aseguro que todas las etiquetas HTML fueron cargadas y procesadas por el browser*/
    console.log("hola desde el DOMContentLoaded"); //Impresion en consola cuando cargue el DOM

    let boton = document.getElementById("btn-submit"); //Funcion para obtener el elemento por ID
    boton.addEventListener("click", (ev)=>{ //Escuchamos el evento click mediante una funcion
        
        let nombre = document.getElementById("nombre").value; //Obtenemos el elemento Nombre
        let email = document.getElementById("correo").value; //Obtenemos el elemento Correo
        let genero = getGenero();
        let intereses = getIntereses();
        let suscriptor = { //Creamos un JSON
            nombre, //Traemos el valor de Nombre creada en el formulario
            email,  //Traemos el valor de Email creada en el formulario
            genero, //Traemos el valor de la funcion Genero
            intereses, //Traemos el valor de la funcion Intereses
            fecha_registro: (new Date()).toISOString() //Creando una instancia de el objeto DATE, Cuando se registró el ssuscriptor
        }
/*         console.log("El nombre del suscriptor es "+nombre); */    
        console.dir(suscriptor); //Imprimimos el OBJETO

        guardarSuscriptor(suscriptor);



    });
});

function guardarSuscriptor(suscriptor){
    const url = "https://curso-frontend-a976d-default-rtdb.firebaseio.com/suscriptores.json";
    fetch(url, {
        /* METHOD y BODY son los mas importntes */
        method: "POST", //Insercion de datos (GET es obtencion de datos)
        body: JSON.stringify(suscriptor) //Simboliza como voy a intercambiar datos con la base de datos,
        //JSON.stringify hace que el objeto JSON se convierta en un string
    });

}


function getIntereses(){
    let inputIntereses = document.querySelectorAll("input[name='intereses']:checked");
    let arrIntereses = [];
    // Alternativa 1
    inputIntereses.forEach(nodoInteres => arrIntereses.push(nodoInteres.value)); //Similar al Map en REACT, por cada elemento encontrado en la variable => realizamos la accion
    
    // Alternativa 2
    /* for(let i = 0; i < inputIntereses.length; i++){
        const interes = inputIntereses[i].value;
        arrIntereses.push(interes);
    } */

    if(inputIntereses.length < 1 ){
        mostrarError("Debe seleccionar al menos un item de su interes!!!");
        return false;
    }
    return arrIntereses;

}


function getGenero() {
    let inputSeleccionado = document.querySelector("input[name='genero']:checked")
    if ( inputSeleccionado == null ) {
        mostrarError("Debe seleccionar un género!!!");
        return false 
    }
    const genero = inputSeleccionado.value;
    return genero;
}

function mostrarError(mensajeDeError) {
    console.error(mensajeDeError); 
}

console.log("Hola Mundo!!");