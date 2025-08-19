// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

// Función para añadir un nombre
function agregarAmigo() {
    let input = document.querySelector('#amigo'); 
    let nombre = input.value.trim(); // Quita espacios en blanco al inicio y final

    // Validar si está vacío o solo son espacios
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
    } else {
        listaAmigos.push(nombre); // Agregar a la lista
        actualizarLista();
    }

    input.value = ""; // Limpiar input después de añadir
}

// Función para mostrar la lista de amigos en pantalla
function actualizarLista() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = ""; // Limpiar lista anterior

    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    }
}

// Función para sortear un amigo (sin repetir y mostrando solo el último resultado)
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Ya no quedan amigos por sortear.");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    // Guardar el nombre sorteado
    let amigoSorteado = listaAmigos[indiceAleatorio];
    // Eliminar al amigo sorteado de la lista para que no se repita
    listaAmigos.splice(indiceAleatorio, 1);

    // Mostrar el resultado en pantalla (limpiando el anterior)
    let resultadoHTML = document.querySelector('#resultado');
    resultadoHTML.innerHTML = ""; // 👉 Esto borra el resultado anterior
    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultadoHTML.appendChild(li);

    // Actualizar la lista visible después de quitar al amigo
    actualizarLista();
}


