import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../../service/educacion/educacion.service';
import { Educacion } from '../../../Models/Educacion';

@Component({
  selector: 'app-educacion-card-add',
  templateUrl: './educacion-card-add.component.html',
  styleUrls: ['./educacion-card-add.component.css']
})
export class EducacionCardAddComponent implements OnInit {

  @Output() onAddEducacion: EventEmitter<Educacion> = new EventEmitter();
  
  institucion_edu: String = '';
  descripcion_edu: String= '';
  url_foto_edu: String= 'src/img/argprog';
  personas_id_persona: number = 1;

  constructor(
    public fb: FormBuilder,
    public educacionService: EducacionService
  ) { }

  ngOnInit(): void {}

  onSubmit(){
    if(this.descripcion_edu.length == 0 || this.institucion_edu.length == 0){
      alert('Por favor completar los datos de la educacion!');
      return 
    }
    const {institucion_edu,descripcion_edu,personas_id_persona,url_foto_edu} = this
    const newEducacion = { institucion_edu,descripcion_edu,personas_id_persona,url_foto_edu }

    this.onAddEducacion.emit(newEducacion);
  }

}
