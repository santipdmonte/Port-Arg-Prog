import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from '../../../service/proyecto/proyecto.service';
import { Proyecto } from '../../../Models/Proyecto';
import { empty } from 'rxjs';

@Component({
  selector: 'app-proyectos-card-add',
  templateUrl: './proyectos-card-add.component.html',
  styleUrls: ['./proyectos-card-add.component.css']
})
export class ProyectosCardAddComponent implements OnInit {



  @Output() onAddProyecto: EventEmitter<Proyecto> = new EventEmitter();

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
        id_proyectos: [''] ,
        nombre_proyecto: ['',Validators.required] ,
        descripcion_proyecto: ['',Validators.required],
        url_foto_proyecto: ['assets/img/civet-web.png'],
        url_proyecto: [''],
        personas_id_persona: [1],
      })
    }
  
    onSubmit(){
      this.onAddProyecto.emit(this.proyectoForm.value);
      this.proyectoForm.reset({
        id_proyectos: '' ,
        nombre_proyecto: '' ,
        descripcion_proyecto: '',
        url_foto_proyecto: 'assets/img/civet-web.png',
        url_proyecto: '',
        personas_id_persona: 1,
      });
    }
}
