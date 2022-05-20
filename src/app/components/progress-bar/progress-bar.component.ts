import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bar } from 'src/app/Models/bar';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Habilidad } from 'src/app/Models/Habilidad';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  faPenToSquare = faPenToSquare
  faTimes = faTimes
  showEditInterface: boolean = true;
  subscription?: Subscription;

  @Input() bar: Bar = new Bar();
  @Input() hab: Habilidad = {};

  //habil: Habilidad = {
  //    id_habilidad: this.hab.id_habilidades,
  //    nombre_habilidad: this.hab.nombre_habilidades,
  //    descripcion_habilidades: this.hab.descripcion_habilidades,
  //    rango: this.hab.rango,
  //    personas_id_persona: 1
  //};

  @Output() DeleteClick = new EventEmitter();
  @Output() EditClick = new EventEmitter();

  constructor(
    private UiService: UiService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

  deleteClick(){
    console.log()
    this.DeleteClick.emit()
  }

  editClick(){
    this.EditClick.emit()
  }

  toString(num:number){
    return num.toString()+"%"
  }

}
