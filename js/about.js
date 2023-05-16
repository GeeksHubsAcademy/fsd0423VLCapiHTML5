

let mensajeAbout = document.getElementById("saludo");

let objetoDesdeSessionStorage = JSON.parse(sessionStorage.getItem("alumno"));

console.log(objetoDesdeSessionStorage);

mensajeAbout.innerHTML = `Hola ${sessionStorage.getItem("usuario")}`;