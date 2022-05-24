import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  public experienciaForm = new FormGroup({
    id_experiencias: new FormControl (''),
    nombre_expe: new FormControl (''),
    descripcion_expe: new FormControl ('') ,
    url_foto_expe: new FormControl (''),
    personas_id_persona: new FormControl ('1'),
  });  
  

  
    constructor(
      public fb: FormBuilder,
      public experienciaService: ExperienciaService
    ) { }
  
    ngOnInit(): void {
  
      this.experienciaForm = this.fb.group({
        id_experiencias: [''] ,
        nombre_expe: ['',Validators.required] ,
        descripcion_expe: ['',Validators.required],
        url_foto_expe: ['assets/img/pic04.jpg'],
        personas_id_persona: ['1'],
      })
  
    }
  
  
  onSubmit(){ 
    this.onAddExperiencia.emit(this.experienciaForm.value);
    this.cancelClick();
  }

  

  @Output() cancel: EventEmitter<any> = new EventEmitter();

  cancelClick(){
    this.cancel.emit();
  }


}
