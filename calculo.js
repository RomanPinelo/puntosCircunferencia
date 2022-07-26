// Elementos del DOM
var coorH = document.getElementById("coordenadaH");
var coorK = document.getElementById("coordenadaK");
var valorRadio = document.getElementById("radio");
var ecuaCanonica = document.getElementById("ecuacionCanonica");
var tabla = document.getElementById("tablaPuntos");
var mensajeNoResultados = document.getElementById("noMasResultados");
var btnPun = document.getElementById("btnPuntos");
var btnBor = document.getElementById("btnBorrar");

// Evento del botón
btnBor.addEventListener('click', function(){
  window.location.reload();
});