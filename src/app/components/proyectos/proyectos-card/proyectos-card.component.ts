import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { ProyectoService } from 'src/app/service/proyecto/proyecto.service';
import { Proyecto } from '../../../Models/Proyecto';

import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-proyectos-card',
  templateUrl: './proyectos-card.component.html',
  styleUrls: ['./proyectos-card.component.css']
})
export class ProyectosCardComponent implements OnInit {

  showEditInterface: boolean = true;
  subscription?: Subscription;
  proyecto: Proyecto[] = [];

  faTimes = faTimes

  @Input() proy: Proyecto = {};
  @Output() DeleteClick = new EventEmitter();
  @Output() EditClick = new EventEmitter();

  constructor(
    private UiService: UiService,
    private proyectoService: ProyectoService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

  deleteClick(){
    this.DeleteClick.emit()
  }

  editClick(proy: Proyecto){
    console.log(proy)
    this.EditClick.emit()
  }

}
