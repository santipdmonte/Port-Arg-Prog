import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../../service/educacion/educacion.service';
import { Educacion } from '../../../Models/Educacion';
import { empty, Observable } from 'rxjs';

@Component({
  selector: 'app-educacion-card-add',
  templateUrl: './educacion-card-add.component.html',
  styleUrls: ['./educacion-card-add.component.css']
})
export class EducacionCardAddComponent implements OnInit {



  @Output() onAddEducacion: EventEmitter<Educacion> = new EventEmitter();
  
  public educacionForm = new FormGroup({
    id_educacion: new FormControl (''),
    institucion_edu: new FormControl ('') ,
    descripcion_edu: new FormControl (''),
    url_foto_edu: new FormControl (''),
    personas_id_persona: new FormControl ('1'),
  });



  constructor(
    public fb: FormBuilder,
    public educacionService: EducacionService
  ) { }

  ngOnInit(): void {

    this.educacionForm = this.fb.group({
      id_educacion: [''] ,
      institucion_edu: ['',Validators.required] ,
      descripcion_edu: ['',Validators.required],
      url_foto_edu: ['assets/img/pic04.jpg'],
      personas_id_persona: ['1'],
    })

  }

  
  onSubmit(){
    this.onAddEducacion.emit(this.educacionForm.value);
  }



  @Output() cancel: EventEmitter<any> = new EventEmitter();

  cancelClick(){
    this.cancel.emit();
  }

}
