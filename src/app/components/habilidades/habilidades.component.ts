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

  showEditInterface: boolean = true;
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

  @Output() toEdit: Habilidad = {};
  
  ToEdit(hab: any){
    console.log(hab)
  this.toEdit = hab;
  }

  addHabilidad(hab: Habilidad){
    this.habilidadService.add(hab).subscribe(
      (habilidad: Habilidad) => this.habilidad.push(habilidad)
    )
  }

}
