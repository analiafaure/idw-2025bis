// Variables con let y const, vinculación de HTML con JS y funciones

// Selección de elementos del DOM: estos NO cambian, por eso const
const formAltaMedico = document.getElementById('formAltaMedico');
const inputNombre = document.getElementById('nombre');
const inputEspecialidad = document.getElementById('especialidad');
const inputObraSocial = document.getElementById('obrasocial');
const inputEmail = document.getElementById('email');

// Función para manejar el submit del formulario
function altaMedico(event) {
    event.preventDefault(); // Si está en un formulario y ocurre un evento submit, evita que el formulario se envíe y la página se recargue.

    // Creación de variables let para los valores ingresados
    let nombre = inputNombre.value.trim(); //.trim()elimina los espacios en blanco al principio y al final del texto.
    let especialidad = inputEspecialidad.value.trim();
    let obraSocial = inputObraSocial.value.trim();
    let email = inputEmail.value.trim();

    // Validación simple (puedes mejorarla)
    if (!nombre || !especialidad || !obraSocial || !email) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Mostrar los datos en un alert
    //comilla invertida
    alert(
        `Médico dado de alta:\n\n` +
        `Nombre: ${nombre}\n` +
        `Especialidad: ${especialidad}\n` +
        `Obras Sociales: ${obraSocial}\n` +
        `Email: ${email}`
    );

    // Resetear formulario
    formAltaMedico.reset();
}

// Vinculación del evento submit al formulario
//le dice al navegador que “escuche” el evento submit de ese formulario. 
//El evento submit ocurre cuando el usuario envía el formulario 
//(por ejemplo, al hacer clic en un botón <button type="submit">).
formAltaMedico.addEventListener('submit', altaMedico);