class Cabecera {
    private tituloElemento: HTMLHeadingElement;
    private color: string;
    private fuente: string;
  
    constructor(tituloId: string) {
      // Obtiene el elemento del título por su ID
      this.tituloElemento = document.getElementById(tituloId) as HTMLHeadingElement;
      // Obtiene los estilos actuales del título
      this.color = getComputedStyle(this.tituloElemento).color;
      this.fuente = getComputedStyle(this.tituloElemento).fontFamily;
    }
  
    // Método para obtener y mostrar las propiedades del título (texto, color, fuente)
    public obtenerPropiedades(): void {
      const titulo = this.tituloElemento.textContent;
      const color = this.color;
      const fuente = this.fuente;
      console.log(`Título: ${titulo}, Color: ${color}, Fuente: ${fuente}`);
    }
  
    // Método para alinear el título a la izquierda, derecha o centro
    public alinearTitulo(alineacion: 'left' | 'right' | 'center'): void {
      this.tituloElemento.style.textAlign = alineacion;
      console.log(`Título alineado a: ${alineacion}`);
    }
  
    // Método para imprimir todas las propiedades del título (texto, color, fuente, alineación)
    public imprimirPropiedades(): void {
      const titulo = this.tituloElemento.textContent;
      const color = this.color;
      const fuente = this.fuente;
      console.log(`Propiedades del título: Título: ${titulo}, Color: ${color}, Fuente: ${fuente}, Alineación: ${this.tituloElemento.style.textAlign}`);
    }
  }
  
  // Asumiendo que ya tienes un elemento h1 con el id "titulo-pagina" en el HTML
  
  const cabecera = new Cabecera("titulo-pagina");
  
  // Vinculamos los métodos de la clase a los botones en el HTML
  
  const btnObtenerPropiedades = document.getElementById("btn-obtener-propiedades") as HTMLButtonElement;
  const btnAlinearTitulo = document.getElementById("btn-alinear-titulo") as HTMLButtonElement;
  const btnImprimirPropiedades = document.getElementById("btn-imprimir-propiedades") as HTMLButtonElement;
  
  // Evento para obtener y mostrar las propiedades del título
  btnObtenerPropiedades.addEventListener("click", () => {
    cabecera.obtenerPropiedades(); // Obtener título, color y fuente
  });
  
  // Evento para alinear el título según la elección del usuario
  btnAlinearTitulo.addEventListener("click", () => {
    const alineaciones: Array<'left' | 'right' | 'center'> = ['left', 'center', 'right'];
    const alineacion = prompt("Ingrese la alineación: 'left', 'center', o 'right'") as 'left' | 'right' | 'center';
    if (alineaciones.includes(alineacion)) {
      cabecera.alinearTitulo(alineacion); // Alinear título según la entrada
    } else {
      alert("Alineación no válida. Usa 'left', 'center' o 'right'.");
    }
  });
  
  // Evento para imprimir todas las propiedades del título
  btnImprimirPropiedades.addEventListener("click", () => {
    cabecera.imprimirPropiedades(); // Imprimir todas las propiedades
  });
  