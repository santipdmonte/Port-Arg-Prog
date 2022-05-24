import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HabilidadService } from '../../../service/habilidad/habilidad.service';
import { Habilidad } from '../../../Models/Habilidad';
import { empty } from 'rxjs';

@Component({
  selector: 'app-habilidades-card-edit',
  templateUrl: './habilidades-card-edit.component.html',
  styleUrls: ['./habilidades-card-edit.component.css']
})
export class HabilidadesCardEditComponent implements OnInit {

  @Output() onAddHabilidad: EventEmitter<Habilidad> = new EventEmitter();

  @Input() hab :Habilidad = {};
  
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
      id_habilidades: [this.hab.id_habilidades,[]] ,
      nombre_habilidad: [this.hab.nombre_habilidad,Validators.required] ,
      rango: [this.hab.rango,Validators.required],
      personas_id_persona: [this.hab.personas_id_persona],
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

