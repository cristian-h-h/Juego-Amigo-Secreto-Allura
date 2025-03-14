// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
console.log(listaAmigos);
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        
    } else {
        listaAmigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        actualizarLista()
    };

    console.log(listaAmigos);

    return;
};

function actualizarLista() {
    lista.innerHTML = ""; 

    let inicioLista = 0;
    let finalLista = listaAmigos.length -1;

    while (inicioLista <= finalLista) {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = listaAmigos[inicioLista];
        lista.appendChild(listaNombre);
        inicioLista++;
    };

    return;
};

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay ningún nombre disponible.")
    } else {
        let indiceSorteado = Math.floor(Math.random() * (listaAmigos.length));
        let nombreSorteado = listaAmigos[indiceSorteado];
        let nombreMostrado = document.getElementById("resultado");
        nombreMostrado.innerHTML = nombreSorteado;

        lista.innerHTML = ""; 
    };

    return;
};

function reiniciarJuego() {
    // Vaciar la lista de amigos
    listaAmigos = [];

    // Limpiar la lista visual en el HTML
    lista.innerHTML = "";

    // Limpiar el resultado del sorteo si existe
    let nombreMostrado = document.getElementById("resultado");
    if (nombreMostrado) {
        nombreMostrado.innerHTML = "";
    }

    console.log("Juego reiniciado. Lista de amigos vacía:", listaAmigos);
}

// Asignar la función al botón de reinicio
document.getElementById("reiniciarJuego").addEventListener("click", reiniciarJuego);