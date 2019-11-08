import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Proyecto } from 'src/app/_models/proyecto';
import { ProyectoService } from 'src/app/_services/Proyecto.service';
import { tipoProyecto, Estado, Tipologias } from '../_config/extra'

declare var jQuery: any;
/**
 * Edit proyecto by Admin
 */
@Component({
    selector: 'app-proyecto',
    templateUrl: './proyecto.component.html',
})
export class ProyectoComponent implements OnInit {

    proyecto: Proyecto;
    list: Array<Proyecto> = [];
    showError: boolean;
    idDel;
    tipos = tipoProyecto;
    estados = Estado;
    tipologias = Tipologias;
    constructor(
        private proyectoService: ProyectoService,
    ) { }

    ngOnInit(): void {
        this.getAll()
    }

    /**
     * Get all proyectos
     */

    getProyecto(id): void {
        // Get Proyecto
        this.proyectoService.getById(id).subscribe(proyecto => this.proyecto = proyecto);
    }

    getAll(): void {
        this.proyecto = new Proyecto(null,null,null,null);
        this.proyectoService.getAll().subscribe(list => {this.list = list});
    }
    /**
     * Save or create Proyecto
     */
    save(): void {
        if (this.proyecto.Codigo) {
            // Save
            this.proyectoService.update(this.proyecto).subscribe(data => this.getAll());
        } else {
            // Create
            this.proyectoService.create(this.proyecto).subscribe(data => this.getAll());
        }
        //*/
    }


    delete(){
        this.proyectoService.delete(this.proyecto.Codigo).subscribe(data =>{
            this.getAll()
        });
      }
}
