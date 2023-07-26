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