document.addEventListener('DOMContentLoaded', function() {
    const whatsappLink = document.getElementById('whatsapp-link');
    const phoneNumber = '573242676146'; // Tu número de teléfono CON el código de país (57 para Colombia) sin espacios ni guiones
    const message = encodeURIComponent('Hola Sintia, vi tu portafolio y me gustaría saber más sobre tus proyectos. Me gustaría contactarte.');

    // Construye el enlace para WhatsApp
    // Usa la API oficial de WhatsApp para asegurar compatibilidad y que se abra la app si está instalada.
    // Esto funciona tanto para móvil como para escritorio (abrirá WhatsApp Web).
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    whatsappLink.href = whatsappURL;
});