class Cabecera {
  private tituloElemento: HTMLElement;
  private color: string;
  private fuente: string;

  constructor(tituloId: string) {
      this.tituloElemento = <HTMLHeadingElement>document.getElementById(tituloId);
      if (!this.tituloElemento) {
          throw new Error(`El elemento con ID ${tituloId} no se encontró.`);
      }
      this.color = getComputedStyle(this.tituloElemento).color;
      this.fuente = getComputedStyle(this.tituloElemento).fontFamily;
  }

  obtenerPropiedades() {
      const titulo = this.tituloElemento.textContent;
      const color = this.color;
      const fuente = this.fuente;
      console.log(`Título: ${titulo}, Color: ${color}, Fuente: ${fuente}`);
  }

  alinearTitulo(alineacion: string) {
      this.tituloElemento.style.textAlign = alineacion;
      console.log(`Título alineado a: ${alineacion}`);
  }

  imprimirPropiedades() {
      const titulo = this.tituloElemento.textContent;
      const color = this.color;
      const fuente = this.fuente;
      console.log(`Propiedades del título: Título: ${titulo}, Color: ${color}, Fuente: ${fuente}, Alineación: ${this.tituloElemento.style.textAlign}`);
  }
}

const cabecera = new Cabecera("titulo-pagina");

const btnObtenerPropiedades = document.getElementById("btn-obtener-propiedades");
const btnAlinearTitulo = document.getElementById("btn-alinear-titulo");
const btnImprimirPropiedades = document.getElementById("btn-imprimir-propiedades");

btnObtenerPropiedades?.addEventListener("click", () => {
  cabecera.obtenerPropiedades();
});

btnAlinearTitulo?.addEventListener("click", () => {
  const alineaciones = ['left', 'center', 'right'];
  const alineacion = prompt("Ingrese la alineación: 'left', 'center', o 'right'");
  if (alineacion !== null && alineaciones.includes(alineacion)) {
      cabecera.alinearTitulo(alineacion);
  } else {
      alert("Alineación no válida. Usa 'left', 'center' o 'right'.");
  }
});

btnImprimirPropiedades?.addEventListener("click", () => {
  cabecera.imprimirPropiedades();
});
