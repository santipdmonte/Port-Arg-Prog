import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../../service/educacion/educacion.service';
import { Educacion } from '../../../Models/Educacion';
import { empty } from 'rxjs';

@Component({
  selector: 'app-educacion-card-add',
  templateUrl: './educacion-card-add.component.html',
  styleUrls: ['./educacion-card-add.component.css']
})
export class EducacionCardAddComponent implements OnInit {

  @Output() onAddEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Input() toEditEdu :Educacion = {};
  
  
  //educacionForm?: FormGroup ;
  institucion_edu: String = '' ;
  descripcion_edu: String= '';
  url_foto_edu: String= 'pic04.jpg';
  personas_id_persona: number = 1;

  constructor(
    public fb: FormBuilder,
    public educacionService: EducacionService
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
    if(this.descripcion_edu.length == 0 || this.institucion_edu.length == 0 ){
      alert('Por favor completar los datos de la educacion!');
      return 
    }
    this.url_foto_edu = ("assets/img/"+this.url_foto_edu.replace("C:\\fakepath\\",""));
    const {institucion_edu,descripcion_edu,personas_id_persona,url_foto_edu} = this
    const newEducacion = { institucion_edu,descripcion_edu,personas_id_persona,url_foto_edu }

    this.onAddEducacion.emit(newEducacion);
  }

}
