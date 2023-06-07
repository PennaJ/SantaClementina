window.onload = function(){
    const form = document.getElementById('form-contacto');

    form.addEventListener('submit', function(e){

        alert("El formulario se envió satisfactoriamente")
        // e.preventDefault();

        // let campoNombre = document.querySelector('form #name')

        // let errores = [];

        // if (campoNombre == ''){
        //     errores.push('El campo nombre debe ser completado')
        // }
    })
}


// window.onload = function () {
//     // first code here...
// };

// var prev_handler = window.onload;
// window.onload = function () {
//     if (prev_handler) {
//         prev_handler();
//     }
//     // second code here...
// };