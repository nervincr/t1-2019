//ce-web>ng g cl Controladores/noticia Crear clase.
//ng generate component components/students-list Crear componente.
export class cNoticia {
    public Id:Number
    public Titulo:string
    public Imagen:string
    public Descripcion:string
    public FechaCreacion:Date
    public UltimaModificacion:Date

    constructor(Id:Number,
        Titulo:string,
        Imagen:string,
        Descripcion:string,
        FechaCreacion:Date,
        UltimaModificacion:Date) {
            this.Id = Id;
            this.Titulo = Titulo;
            this.Imagen = Imagen;
            this.Descripcion = Descripcion;
            this.FechaCreacion = FechaCreacion;
            this.UltimaModificacion = UltimaModificacion;
    }
}
