window.onload = function(){
    const form = document.querySelector('form-contacto');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        let campoNombre = document.querySelector('form #name')

        let errores = [];

        if (campoNombre == ''){
            errores.push('El campo nombre debe ser completado')
        }
    })
}