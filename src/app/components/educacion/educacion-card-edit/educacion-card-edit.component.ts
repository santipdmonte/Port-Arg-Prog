import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../../service/educacion/educacion.service';
import { Educacion } from '../../../Models/Educacion';
import { empty, Observable } from 'rxjs';

@Component({
  selector: 'app-educacion-card-edit',
  templateUrl: './educacion-card-edit.component.html',
  styleUrls: ['./educacion-card-edit.component.css']
})
export class EducacionCardEditComponent implements OnInit {

  @Output() onAddEducacion: EventEmitter<Educacion> = new EventEmitter();

  @Input() edu :Educacion = {};
  
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
      id_educacion: [this.edu.id_educacion,[]] ,
      institucion_edu: [this.edu.institucion_edu,Validators.required] ,
      descripcion_edu: [this.edu.descripcion_edu,Validators.required],
      url_foto_edu: [this.edu.url_foto_edu],
      personas_id_persona: [this.edu.personas_id_persona],
    })
  }

  
  onSubmit(){
    this.onAddEducacion.emit(this.educacionForm.value);

    //this.educacionForm.reset();
    //this.educacionForm.setValue({
    //  personas_id_persona: ['1'],
    //  url_foto_edu: ['assets/img/pic04.jpg']
    //});
  }

}
