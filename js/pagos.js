function guardar() {
    validacion();
    // if (!validacion()) {
    //     return;
    // }
    console.log("guardad");
    limpiarInput();
    const datos = {
        nombre: document.getElementById("id_nombre").value,
        apellido: document.getElementById("id_apellido").value,
        numero: document.getElementById("id_num").value,
        fecha: document.getElementById("id_date").value,
        cvv: document.getElementById("id_cvv").value
    };
    console.log(datos);
    mostrarContenido(datos);

}

function validacion() {
    let nombre = document.getElementById("id_nombre").value;
    let apellido = document.getElementById("id_apellido").value;
    let numero = document.getElementById("id_num").value;
    let fecha = document.getElementById("id_date").value;
    let cvv = document.getElementById("id_cvv").value;

    if (nombre === "") {
        mostrarAsterisco("id_error_nombre");
        return;
    } else {
        ocultarAsterisco("id_error_nombre");
    }

    if (apellido === "") {
        mostrarAsterisco("id_error_apellido");
        return;
    }
    else {
        ocultarAsterisco("id_error_apellido");
    }

    if (numero === "") {
        mostrarAsterisco("id_error_num");
        return;
    }
    else {
        ocultarAsterisco("id_error_num");
    }

    if (fecha === "") {
        mostrarAsterisco("id_error_date");
        return;
    }
    else {
        ocultarAsterisco("id_error_date");
    }

    if (cvv === "") {
        mostrarAsterisco("id_error_cvv");
        return;
    }
    else {
        ocultarAsterisco("id_error_cvv");
    }


}

function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "*";
}

function ocultarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "";
}

function limpiarInput() {
    setTimeout(() => {
        const errores = document.querySelectorAll(".error_a")
        errores.forEach(e => e.innerText = "");
    }, 3000);
}
function mostrarContenido(datos) {
    const contenedor = document.getElementById("id_mostrarContenido");

    contenedor.innerHTML = `
        <h3>Datos ingresados:</h3>
        <p><strong>Nombre:</strong> ${datos.nombre}</p>
        <p><strong>Apellido:</strong> ${datos.apellido}</p>
        <p><strong>Número:</strong> ${datos.numero}</p>
        <p><strong>Fecha:</strong> ${datos.fecha}</p>
        <p><strong>CVV:</strong> ${datos.cvv}</p>
    `;
}