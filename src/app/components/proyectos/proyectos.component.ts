import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

import { ProyectoService } from 'src/app/service/proyecto/proyecto.service';
import { Proyecto } from '../../Models/Proyecto';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  showEditInterface: boolean = false;
  subscription?: Subscription;
  proyecto: Proyecto[] = [];
  editProyecto: Proyecto = {};

  constructor(
    private UiService: UiService,
    private proyectoService: ProyectoService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
  }

  ngOnInit(): void {
    this.proyectoService.get().subscribe(
      (proyecto) => {
        this.proyecto = proyecto
    });
  }

  delete(proy: any){
    this.proyectoService.delete(proy.id_proyectos).subscribe(
      ()=>(
        this.proyecto = this.proyecto.filter( (p) => p.id_proyectos !== proy.id_proyectos)
      )
    )
  }

  public toEditProy = new EventEmitter();

  onEdit: Proyecto = {};
  
  ToEdit(proy: any){
    this.toEditProy.emit()
    this.onEdit = proy;
    this.interfaceEdit();
  }



  addProyecto(proy: any){
    this.proyectoService.add(proy).subscribe(
      (proyecto: Proyecto) => this.proyecto.push(proyecto)
    )
  }

  popOld(proy: Proyecto){
    this.proyecto = this.proyecto.filter( (p) => p.id_proyectos !== proy.id_proyectos)
  }

  //-------- Interfaces ----------

  interfaceCardEdit: boolean = false;
  interfaceCardAdd: boolean = false;

  interfaceAdd(){
    this.interfaceCardAdd = !this.interfaceCardAdd
    if (this.interfaceCardEdit){
      this.interfaceCardEdit = !this.interfaceCardEdit
    }
  }

  interfaceEdit(){
    this.interfaceCardEdit = !this.interfaceCardEdit
    if (this.interfaceCardAdd){
      this.interfaceCardAdd = !this.interfaceCardAdd
    }
  }

}
