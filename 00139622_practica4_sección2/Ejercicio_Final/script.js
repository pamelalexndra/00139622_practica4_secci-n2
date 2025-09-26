function mostrarRecordatorio() {
  const dia = document.getElementById("diaSelect").value;
  const mensaje = document.getElementById("mensajeInput").value.trim();
  const resultado = document.getElementById("resultado");

  const actividades = {
    lunes: "Atender a un cliente específico.",
    martes: "Visitar una agencia fuera de la ciudad.",
    miércoles: "Llevar a tu hija al ballet.",
    jueves: "Priorizar entregas de desarrollo.",
    viernes: "Atender problemas de manera remota.",
    sábado: "Hacer lo que tu esposa quiera."
  };

  if (actividades[dia]) {
    resultado.innerHTML = `
      <p><strong>${dia.charAt(0).toUpperCase() + dia.slice(1)}</strong>: ${actividades[dia]}</p>
      <p>📌 ${mensaje}</p>
    `;
  } else {
    resultado.innerHTML = `<p>⚠️ Por favor selecciona un día válido.</p>`;
  }
}
