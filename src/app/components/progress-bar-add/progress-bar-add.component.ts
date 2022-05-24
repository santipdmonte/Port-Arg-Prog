import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from '../../service/habilidad/habilidad.service';
import { Habilidad } from '../../Models/Habilidad';
import { empty } from 'rxjs';

@Component({
  selector: 'app-progress-bar-add',
  templateUrl: './progress-bar-add.component.html',
  styleUrls: ['./progress-bar-add.component.css']
})
export class ProgressBarAddComponent implements OnInit {




  @Output() onAddHabilidad: EventEmitter<Habilidad> = new EventEmitter();
  @Input() toEditHab :Habilidad = {};
  
  public habilidadForm = new FormGroup({
    id_habilidades: new FormControl (''),
    nombre_habilidad: new FormControl ('') ,
    rango: new FormControl (0),
    personas_id_persona: new FormControl ('1'),
  });

  constructor(
    public fb: FormBuilder,
    public habilidadService: HabilidadService
  ) { }

  ngOnInit(): void {

    this.habilidadForm = this.fb.group({
      id_habilidades: [''] ,
      nombre_habilidad: ['',Validators.required] ,
      rango: [0,Validators.required],
      personas_id_persona: ['1'],
    })

  }

  onSubmit(){
    this.onAddHabilidad.emit(this.habilidadForm.value);
    this.cancel.emit();
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();

  cancelClick(){
    this.cancel.emit();
  }
  
  toString(num:number){
    return num.toString()+"%"
  }

}
