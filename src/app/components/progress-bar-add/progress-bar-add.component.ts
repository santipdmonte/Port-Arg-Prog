import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  nombre_habilidad: String = "";
  rango: number = 0;
  personas_id_persona: number = 1;
  

  constructor(
    public fb: FormBuilder,
    public habilidadService: HabilidadService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("onSubmit")
    if(this.nombre_habilidad.length == 0 || this.rango == 0 ){
      alert('Por favor completar los datos de la habilidad!');
      return 
    }
    const {nombre_habilidad,rango,personas_id_persona} = this
    const newHabilidad = { nombre_habilidad,rango,personas_id_persona }

    this.onAddHabilidad.emit(newHabilidad);
  }

  toString(num:number){
    return num.toString()+"%"
  }

}
