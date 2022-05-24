import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from '../../../service/experiencia/experiencia.service';
import { Experiencia } from '../../../Models/Experiencia';
import { empty } from 'rxjs';

@Component({
  selector: 'app-experiencias-card-edit',
  templateUrl: './experiencias-card-edit.component.html',
  styleUrls: ['./experiencias-card-edit.component.css']
})
export class ExperienciasCardEditComponent implements OnInit {
  
  @Output() onAddExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  @Input() expe :Experiencia = {};

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
        id_experiencias: [this.expe.id_experiencias,[]] ,
        nombre_expe: [this.expe.nombre_expe,Validators.required] ,
        descripcion_expe: [this.expe.descripcion_expe,Validators.required],
        url_foto_expe: [this.expe.url_foto_expe],
        personas_id_persona: [this.expe.personas_id_persona],
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
