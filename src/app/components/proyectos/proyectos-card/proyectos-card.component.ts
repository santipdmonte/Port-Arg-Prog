import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { ProyectoService } from 'src/app/service/proyecto/proyecto.service';
import { Proyecto } from '../../../Models/Proyecto';

import * as AOS from 'aos';



@Component({
  selector: 'app-proyectos-card',
  templateUrl: './proyectos-card.component.html',
  styleUrls: ['./proyectos-card.component.css']
})
export class ProyectosCardComponent implements OnInit {

  @Input() showEditInterface: boolean = false;
  subscription?: Subscription;
  proyecto: Proyecto[] = [];

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
    AOS.init();
    
  }

  deleteClick(){
    this.DeleteClick.emit()
  }

  editClick(proy: Proyecto){
    console.log(proy)
    this.EditClick.emit()
  }

}
