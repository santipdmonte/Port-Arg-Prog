import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

import { ExperienciaService } from 'src/app/service/experiencia/experiencia.service';
import { Experiencia } from '../../Models/Experiencia';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})

export class ExperienciasComponent implements OnInit {

  showEditInterface: boolean = true;
  subscription?: Subscription;
  experiencia: Experiencia[] = [];
  editExperiencia: Experiencia = {};

  constructor(
    private UiService: UiService,
    private experienciaService: ExperienciaService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
  }

  ngOnInit(): void {
    this.experienciaService.get().subscribe(
      (experiencia) => {
        this.experiencia = experiencia
    });
  }

  delete(expe: any){
    this.experienciaService.delete(expe.id_experiencias).subscribe(
      ()=>(
        this.experiencia = this.experiencia.filter( (e) => e.id_experiencias !== expe.id_experiencias)
      )
    )
  }


  @Output() toEdit: Experiencia = {};
  
  ToEdit(expe: any){
  this.toEdit = expe;
  }

  addExperiencia(expe: Experiencia){
    this.experienciaService.add(expe).subscribe(
      (experiencia: Experiencia) => this.experiencia.push(expe)
    )
  }

}
