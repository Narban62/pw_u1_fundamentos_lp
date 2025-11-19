function guardar() {
    console.log("guardado");
    validacion();
    limpiarMensajes()
}
function validacion() {
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let fecha = document.getElementById("id_date").value;
    let email = document.getElementById("id_email").value;
    let password = document.getElementById("id_password").value;

    if (nombre === "") {
        mostrarMensaje("Campo Nombre Vacio");
        mostrarAsterisco("id_error_nombre");
        return;
    }else{
        borrarAsterisco("id_error_nombre");
    }
    if (apellido === "") {
        mostrarMensaje("Campo Apellido Vacio");
        mostrarAsterisco("id_error_apellido");
        return;
    }else{
        borrarAsterisco("id_error_apellido");
    }
    if (fecha === "") {
        mostrarMensaje("Campo Fecha Vacio");
        mostrarAsterisco("id_error_date");
        return;
    }else{
        borrarAsterisco("id_error_date");
    }
    if (email === "") {
        mostrarMensaje("Campo Email Vacio");
        mostrarAsterisco("id_error_email");
        return;
    }else{
        borrarAsterisco("id_error_email");
        validarEmail(email);
    }
    if (password === "") {
        mostrarMensaje("Campo Password Vacio");
        mostrarAsterisco("id_error_password");
        return;
    }else{
        borrarAsterisco("id_error_password");
        borrarMensaje("Datos Guardados");

    }
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";

}

function borrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";
    
}
function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "*";
}

function borrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText="";
    
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

function limpiarMensajes() {


    setTimeout(() => {
        let valor = document.getElementById("id_msg_error");
        valor.innerText = "";
        valor.style.display = "none";

        const erroresAsterisco = document.querySelectorAll('.error_asterisco');
        erroresAsterisco.forEach(e => e.innerText = '');
    }, 3000);

}