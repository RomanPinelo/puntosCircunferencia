// Elementos del DOM
var coorH = document.getElementById("coordenadaH");
var coorK = document.getElementById("coordenadaK");
var valorRadioCuadrado = document.getElementById("radio");
var ecuaCanonica = document.getElementById("ecuacionCanonica");
var tabla = document.getElementById("tablaPuntos");
var mensajeNoResultados = document.getElementById("noMasResultados");
var busca = document.getElementById("buscando");
var btnPun = document.getElementById("btnPuntos");
var btnBor = document.getElementById("btnBorrar");

var ventanaModal = document.getElementById("modal");
var btnModal = document.getElementById("cerrar");
var textoModal = document.getElementById("mensajeModal");

// Funciones
function pintaEcuacion(h, k, radioCuadrado) {
  if (h < 0) {
    ecuaCanonica.innerHTML = `( x + ${Math.abs(h)} )<sup>2</sup> + `;
  } else if (h == 0) {
    ecuaCanonica.innerHTML = `( x - 0 )<sup>2</sup> + `;
  } else {
    ecuaCanonica.innerHTML = `( x - ${h} )<sup>2</sup> + `;
  }

  if (k < 0) {
    ecuaCanonica.innerHTML += `( y + ${Math.abs(k)} )<sup>2</sup> = ${radioCuadrado}`;
  } else if (k == 0) {
    ecuaCanonica.innerHTML += `( y - 0 )<sup>2</sup> = ${radioCuadrado}`;
  } else {
    ecuaCanonica.innerHTML += `( y - ${k} )<sup>2</sup> = ${radioCuadrado}`;
  }
}

function verificaDatos(h, k, radioCuadrado) {
  if (h == "") {
    h = 0;
  }
  if (k == "") {
    k = 0;
  }
  if (radioCuadrado == "") {
    ventanaModal.classList.toggle("active");
    textoModal.innerHTML = "Introduce un valor del radio al cuadrado.";
  } else if (radioCuadrado == 0) {
    ventanaModal.classList.toggle("active");
    textoModal.innerHTML = "Introduce un valor del radio al cuadrado mayor a 0.";
  } else if (radioCuadrado < 0) {
    ventanaModal.classList.toggle("active");
    textoModal.innerHTML = "El valor del radio al cuadrado no puede ser negativo. Introduce un número mayor a 0.";
  } else {
    let x = -100;
    let y = -100;
    let resultado;

    pintaEcuacion(h, k, radioCuadrado);

    busca.innerHTML = "Buscando puntos...";

    var id = setInterval(() => {
      resultado = (Math.pow((x - (h)), 2)) + (Math.pow((y - (k)), 2));

      if (resultado == radioCuadrado) {
        tabla.innerHTML += `
        <tr>
          <td>${x}</td>
          <td>${y}</td>
        </tr>
        `;
      }

      y++;

      if (y > 100) {
        y = -100;
        x++;
        if (x > 100) {
          busca.innerHTML = "";
          mensajeNoResultados.innerHTML = "No hay más resultados";
          clearInterval(id);
        }
      }
    }, 1);
  }
}

// Evento de los botones
btnBor.addEventListener('click', function(){
  window.location.reload();
});

btnModal.addEventListener('click', function(){
  ventanaModal.classList.toggle("active");
});

btnPun.addEventListener('click', function(){
  let h = coorH.value;
  let k = coorK.value;
  let radioCuadrado = valorRadioCuadrado.value;

  ecuaCanonica.innerHTML = "";
  mensajeNoResultados.innerHTML = "";
  tabla.innerHTML = `
    <tr>
      <th>x</th>
      <th>y</th>
    </tr>
  `;

  verificaDatos(h, k, radioCuadrado);
});