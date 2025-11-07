function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}
function agregarElemento(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}
function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}
function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}
function eliminarElemento(idElemento) {
    document.getElementById(idElemento).remove();
}
function construirH1() {
    return '<h1 id="id_calculadora">Calculadora</h1>'
}
function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo === '+') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }

    document.getElementById('id_resultado').innerText = resultado;


}
function fundamentosJS() {
    /* 3 Tipos de vatriables*/
    var nombre = "Luis"; //antigua, ya es considerada obsoleta, tipado diamico
    let apellido = "Perenguez"; //variables cambiantes, tipado dinamico, no se necesita declarar el tipo de dato
    let apellido2 = 15; //se asignaque es un number, pero puede cambiar
    apellido2 = "Teran"; // no se recomienda estos cambios apesar de que se permite, se supone que debe tener un objetivo especifico, no puede cambiarse sin justificacion
    let arreglo = [1, 2, 3, 4, 5, 6];
    let diassemana = ['Lunes', 'Martes', 'Miercoles', '.....'];
    const IVA = 12.8; //no es absoluto que sean en mayusculas, pero se necesita para la sintaxis
    console.log('Fundamentos de JS');
    console.log(nombre);
    console.log(IVA);
    console.log(arreglo);
    /*Arreglos */
    // se defienen como constanete slos arreglos
    // se modificia el contenido del arreglo
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    arreglosDiasSemana.push('Jueves');//agrega el dia al final
    console.log(arreglosDiasSemana);// imprime en consola al presionar f12
    arreglosDiasSemana.unshift('Dias');//agrega al inicio de el arreglo
    console.log(arreglosDiasSemana);
    console.log(arreglosDiasSemana[0]);
    console.log('Manejo de nulos, undefined y vacio');//en general se maneja nulos, undefines y vacios, no es lo mismo
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);
    //nunca se debe comparar, es para todo JS
    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    //en terminos conceptuales, JS es parecido java
    /*Sentencias de control */
    let edad = 18;
    if (edad >= 18) {
        console.log('Es mayor de edad');
    } else {
        console.log('Es menor de edad');

    }
    //
    let dia = 'Lunes';
    switch (dia) {
        case 'Lunes':
            console.log('es Lunes');
            break;
        case 'Martes':
            console.log('es Martes');
            break;
        default:
            console.log('No es ninguno de esos dias');
            break;
    }
    //for
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
    const frutas = ['manzana', 'sandia', 'papaya', 'naranja']
    for (let fruta of frutas) {
        console.log(fruta);
    }
    /*Manejo de objetos */
    //dentro de js se maneja como un formato json, se declara como const
    //importante, esto se va a ocupar hasta el final
    const profesor = {
        nombre: 'Luis',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    console.log(profesor);
    //este es el get y set de JS
    console.log(profesor.nombre);
    profesor.apellido = 'Cueva';
    console.log(profesor);
    //comparadores
    if (profesor.ciudad === 'Quito') {
        console.log('Es quiteño');
    }
    if (profesor.edad !== 36) {
        console.log('Es diferente de 36')
    } else {
        console.log("Es 36");
    }
    //in para objetos
    //of para arreglos
    for (let clave in profesor) {
        console.log(clave);
        console.log(profesor[clave]);

    }

    const est1 = {
        nombre: 'Luisa',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    const est2 = {
        nombre: 'Luisao',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }

    const arregloEstudiantes = [est1, est2,
        {
            nombre: 'Luisaea',
            apellido: 'Perenguez',
            edad: 27,
            ecuatoriano: true,
            genero: 'M',
            ciudad: 'Quito'
        }
    ];
    console.log(arregloEstudiantes[0])
    console.log(arregloEstudiantes[2])

    /** Desestructuracion    */
    //Arreglos

    const ar1 = [1, 2, 3, 4, 5, 6, 7];
    const [a, b, c, d, e] = ar1;

    console.log(a);
    console.log(b);
    console.log(c);

    const [primero, , , , , , ultimo] = ar1;

    console.log(primero);
    console.log(ultimo);

    const [p1, p2] = [1, 2, 3, 4, 5, 6, 7];
    imprime(ar1, ar1, ar1);

    //Objetos

    const est3 = {
        nombre: 'Jorge',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Cuenca'
    }

    // modifica valores de objetos con formato json,solo toma valores especificos del objeto
    const { nombre: n, ciudad: ciu } = est3;
    console.log(n);
    console.log(ciu);

    const { nombre: n2, ciudad: ciu2 } = {
        nombre: 'L4',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Quito'
    }
    console.log(n2);
    console.log(ciu2);

    // referencia a un objeto dentro de otro objeto

    const est4 = {
        nombre: 'Jorge',
        apellido: 'Perenguez',
        edad: 27,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'Cuenca',
        direccion: {
            calle: "Av. America",
            barrio: "La gasca",
            numeracion: "Oe3-123"
        }
    }

    console.log(est4.direccion);
    console.log(est4.direccion.barrio);
    
    
    const {edad: ed, direccion } = est4;
    console.log(ed);
    console.log(direccion);

    //deestructurar es como declarar una nueva varibale
    //es util cuando se trabajaj con el framework , de las apis s recibe un json
    //Sirve para no usar todos los atributos y hacer el json muy pesado
    const {calle} = direccion;
    console.log(calle);
    
    
    const {direccion:{barrio, calle:c1, numeracion}} = est4;
    console.log(barrio, c1, numeracion);
    



}

function imprime(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}