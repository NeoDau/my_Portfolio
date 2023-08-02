/* btn header */
const btnMenu = document.getElementById("botonMenu");
const listMenu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    listMenu.classList.toggle("visible");
});

/* Botones mostrar/ocultar */
document.addEventListener('DOMContentLoaded', function() {
    const btnMostrarOcultar = document.getElementById('btnMostrarOcultaruno');
    const contenedorTexto = document.getElementById('txt_uno');

    btnMostrarOcultar.addEventListener('click', function() {
        if (contenedorTexto.style.display === 'none') {
            contenedorTexto.style.display = 'block';
        } else {
            contenedorTexto.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnMostrarOcultar = document.getElementById('btnMostrarOcultarDos');
    const contenedorTexto = document.getElementById('txt_dos');

    btnMostrarOcultar.addEventListener('click', function() {
        if (contenedorTexto.style.display === 'none') {
            contenedorTexto.style.display = 'block';
        } else {
            contenedorTexto.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnMostrarOcultar = document.getElementById('btnMostrarOcultarTres');
    const contenedorTexto = document.getElementById('txt_tres');

    btnMostrarOcultar.addEventListener('click', function() {
        if (contenedorTexto.style.display === 'none') {
            contenedorTexto.style.display = 'block';
        } else {
            contenedorTexto.style.display = 'none';
        }
    });
});

/* Carrusel con img */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/* Funcion para enviar mail */
emailjs.init("dQlTpCvvQkUTGuav4");

function enviarEmail(event) {
    event.preventDefault();

    const formulario = document.getElementById("formularioContacto");
    const datosFormulario = new FormData(formulario);

    emailjs.send("service_y2277p9", "template_y678wv2", {
        nombre: datosFormulario.get("nombre"),
        email: datosFormulario.get("email"),
        asunto: datosFormulario.get("asunto"),
        mensaje: datosFormulario.get("mensaje")
    })
    .then(function(response) {
        console.log("Mensaje enviado correctamente:", response);
        alert("El mensaje ha sido enviado correctamente.");
    },
    function(error) {
        console.log("Error al enviar el mensaje:", error);
        alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo nuevamente.");
    });
}

document.getElementById("formularioContacto").addEventListener("submit", enviarEmail);