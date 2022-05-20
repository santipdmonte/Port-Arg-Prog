import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  @Input() toEditProy :Proyecto = {};

    //educacionForm?: FormGroup ;
    nombre_proyecto: String = '' ;
    descripcion_proyecto: String= '';
    url_foto_proyecto: String= 'assets/img/civet-web.png';
    url_proyecto: String= '';
    personas_id_persona: number = 1;
  
    constructor(
      public fb: FormBuilder,
      public ProyectoService: ProyectoService
    ) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(){
      if(this.descripcion_proyecto.length == 0 || this.nombre_proyecto.length == 0 ){
        alert('Por favor completar los datos de la experiencia!');
        return 
      }
      //this.url_foto_proyecto = ("assets/img/"+this.url_foto_proyecto.replace("C:\\fakepath\\",""));
      var {nombre_proyecto, descripcion_proyecto, url_foto_proyecto,url_proyecto, personas_id_persona} = this
      var newProyecto = {nombre_proyecto, descripcion_proyecto, url_foto_proyecto,url_proyecto, personas_id_persona}
      
      this.onAddProyecto.emit(newProyecto);
    }

}
