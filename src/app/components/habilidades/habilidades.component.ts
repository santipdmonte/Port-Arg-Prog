import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

import { HabilidadService } from 'src/app/service/habilidad/habilidad.service';
import { Habilidad } from '../../Models/Habilidad';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  showEditInterface: boolean = false;
  subscription?: Subscription;
  habilidad: Habilidad[] = [];
  editHabilidad: Habilidad = {};

  constructor(
    private UiService: UiService,
    private habilidadService: HabilidadService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
    this.habilidadService.get().subscribe(
      (habilidad) => {
        this.habilidad = habilidad
    });
  }

  delete(hab: any){
    this.habilidadService.delete(hab.id_habilidades).subscribe(
      ()=>(
        this.habilidad = this.habilidad.filter( (h) => h.id_habilidades !== hab.id_habilidades)
      )
    )
  }

  public toEditEdu = new EventEmitter();

  onEdit: Habilidad = {};

  
  ToEdit(hab: Habilidad){
    this.toEditEdu.emit()
    this.onEdit = hab;
    this.interfaceEdit();
  }

  

  addHabilidad(hab: Habilidad){
    this.habilidadService.add(hab).subscribe(
      (habilidad: Habilidad) => this.habilidad.push(habilidad)
    )
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
