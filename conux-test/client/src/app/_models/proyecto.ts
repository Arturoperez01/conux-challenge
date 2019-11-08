

export class Proyecto {

    // Insert here your custom attributes and function

    // Functions for Proyecto
    // Codigo,	NombreProyecto,	Region,	Tipologia,	TipoProyecto,	FechaIngreso,	Estado
    public Codigo?: number;
    public NombreProyecto?: string;
    public Region?: string;
    public Tipologia?: string;
    public TipoProyecto?: string;
    public FechaIngreso?: Date;
    public Estado?: number;

    constructor(
        Codigo?: number,
        NombreProyecto?: string,
        Region?: string,
        Tipologia?: string,
        TipoProyecto?: string,
        FechaIngreso?: Date,
        Estado?: number

    ) {
        this.Codigo = Codigo;
        this.NombreProyecto = NombreProyecto;
        this.Region = Region;
        this.Tipologia = Tipologia;
        this.TipoProyecto = TipoProyecto;
        this.FechaIngreso = FechaIngreso;
        this.Estado = Estado;
    }

}
