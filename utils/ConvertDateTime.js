function obtenerHoraDesdeISO8601(fechaISO8601) {
  // Obtener la fecha desde la cadena ISO 8601
  const fecha = new Date(fechaISO8601);

  // Obtener la hora, minutos y segundos
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const segundos = fecha.getSeconds();

  // Formatear la hora
  const horaFormateada = `${hora < 10 ? "0" : ""}${hora}:${
    minutos < 10 ? "0" : ""
  }${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;

  return horaFormateada;
}

export default obtenerHoraDesdeISO8601;
