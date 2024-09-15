class Cancion {
    // Atributos públicos
    titulo: string;
    genero: string;
    
    // Atributo privado
    private autor: string;

    // Constructor que recibe título y género
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";  // Inicialmente vacío
    }

    // Método set para asignar el autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método get para obtener el autor
    getAutor(): string {
        return this.autor;
    }

    // Método para mostrar los datos de la canción
    mostrarCancion(): string {
        return `Título: ${this.titulo} <br> Género: ${this.genero} <br> Autor: ${this.getAutor()}`;
    }
}

// Función para manejar la creación de la canción y mostrarla
document.getElementById("crearCancion")!.addEventListener("click", () => {
    // Obtener valores del formulario
    const titulo = (document.getElementById("titulo") as HTMLInputElement).value;
    const genero = (document.getElementById("genero") as HTMLInputElement).value;
    const autor = (document.getElementById("autor") as HTMLInputElement).value;

    // Crear una instancia de la clase Cancion
    const cancion = new Cancion(titulo, genero);
    cancion.setAutor(autor);

    // Mostrar los detalles de la canción
    const resultado = document.getElementById("resultado")!;
    resultado.innerHTML = cancion.mostrarCancion();
});
