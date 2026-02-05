const textElement = document.getElementById('typing-text');
const phrases = [
    "Desarrolladora Java Full Stack ",
    "Especialista en Lógica",
    "Entusiasta de la programación",
    "Creative Coder"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pausa cuando termina de escribir
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

const animarBarras = () => {
    const barras = document.querySelectorAll('.barra-llenado');
    
    barras.forEach(bar => {
        const posicion = bar.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        // Si la barra entra en el campo de visión
        if (posicion < alturaPantalla - 50) { 
            const porcentaje = bar.getAttribute('data-porcentaje');
            
            // Usamos un pequeño retraso para que el ojo humano note el inicio
            setTimeout(() => {
                bar.style.setProperty('width', porcentaje, 'important');
            }, 100); 
        }
    });
};

window.addEventListener('scroll', animarBarras);
window.addEventListener('load', animarBarras);