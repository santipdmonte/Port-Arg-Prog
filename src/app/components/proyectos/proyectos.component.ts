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

  showEditInterface: boolean = true;
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
    console.log(proy)
    this.proyectoService.delete(proy.id_proyectos).subscribe(
      ()=>(
        this.proyecto = this.proyecto.filter( (p) => p.id_proyectos !== proy.id_proyectos)
      )
    )
  }

  @Output() toEdit: Proyecto = {};
  
  ToEdit(proy: any){
  this.toEdit = proy;
  }

  addProyecto(proy: Proyecto){
    this.proyectoService.add(proy).subscribe(
      (proyecto: Proyecto) => this.proyecto.push(proy)
    )
  }

}
