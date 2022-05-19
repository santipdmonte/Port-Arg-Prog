import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from '../../../service/experiencia/experiencia.service';
import { Experiencia } from '../../../Models/Experiencia';
import { empty } from 'rxjs';

@Component({
  selector: 'app-experiencia-card-add',
  templateUrl: './experiencia-card-add.component.html',
  styleUrls: ['./experiencia-card-add.component.css']
})
export class ExperienciaCardAddComponent implements OnInit {

  @Output() onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Input() toEditExpe :Experiencia = {};

    //educacionForm?: FormGroup ;
    nombre_expe: String = '' ;
    descripcion_expe: String= '';
    url_foto_expe: String= 'src/img/argprog';
    personas_id_persona: number = 1;
  
    constructor(
      public fb: FormBuilder,
      public experienciaService: ExperienciaService
    ) { }
  
    ngOnInit(): void {
  
      //this.educacionForm = this.fb.group({
      //  id_educacion: [''],
      //  institucion_edu: [''] ,
      //  descripcion_edu: [''],
      //  url_foto_edu: ['src/img/argprog'],
      //  personas_id_persona: [''],
      //})
  
    }
  
    onSubmit(){
      if(this.descripcion_expe.length == 0 || this.nombre_expe.length == 0 ){
        alert('Por favor completar los datos de la experiencia!');
        return 
      }
      const {nombre_expe,descripcion_expe,personas_id_persona,url_foto_expe} = this
      const newExperiencia = { nombre_expe,descripcion_expe,personas_id_persona,url_foto_expe }
  
      this.onAddExperiencia.emit(newExperiencia);
    }

}
