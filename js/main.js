
const guardado = () => {

    //Recojemos el valor del input.......

    let valor = document.getElementById("nombre").value;

    //Ejemplo de como guardar un simple string
    sessionStorage.setItem("usuario", valor);

    //Ejemplo de como guardar un objeto
    let jorge = {
        nombre : valor,
        edad: 28
    }

    sessionStorage.setItem("alumno", JSON.stringify(jorge));

    window.location.href = "../about.html";

}
