import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from '../../../service/proyecto/proyecto.service';
import { Proyecto } from '../../../Models/Proyecto';
import { empty } from 'rxjs';

@Component({
  selector: 'app-proyectos-card-edit',
  templateUrl: './proyectos-card-edit.component.html',
  styleUrls: ['./proyectos-card-edit.component.css']
})
export class ProyectosCardEditComponent implements OnInit {

  @Output() onAddProyecto: EventEmitter<Proyecto> = new EventEmitter();

  @Input() proy :Proyecto = {};

  public proyectoForm = new FormGroup({
    id_proyectos: new FormControl (''),
    nombre_proyecto: new FormControl ('') ,
    descripcion_proyecto: new FormControl (''),
    url_foto_proyecto: new FormControl (''),
    url_proyecto: new FormControl (''),
    personas_id_persona: new FormControl ('1'),
  });

  
    constructor(
      public fb: FormBuilder,
      public ProyectoService: ProyectoService
    ) { }
  
    ngOnInit(): void {

      this.proyectoForm = this.fb.group({
        id_proyectos: [this.proy.id_proyectos,[]] ,
        nombre_proyecto: [this.proy.nombre_proyecto,Validators.required] ,
        descripcion_proyecto: [this.proy.descripcion_proyecto,Validators.required],
        url_foto_proyecto: [this.proy.url_foto_proyecto],
        url_proyecto: [this.proy.url_proyecto],
        personas_id_persona: [this.proy.personas_id_persona],
      })
    }
  
    onSubmit(){
      this.onAddProyecto.emit(this.proyectoForm.value);
      this.cancelClick();
    }


    @Output() cancel: EventEmitter<any> = new EventEmitter();

    cancelClick(){
      this.cancel.emit();
    }

}
