import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

import { EducacionService } from 'src/app/service/educacion/educacion.service';
import { Educacion } from '../../Models/Educacion';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  showEditInterface: boolean = false;
  subscription?: Subscription;
  educacion: Educacion[] = [];
  editEducacion: Educacion = {};

  constructor(
    private UiService: UiService,
    private educacionService: EducacionService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
  }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(
      (educacion) => {
        this.educacion = educacion
    });
  }

  delete(edu: Educacion){
    this.educacionService.deleteEducacion(edu).subscribe(
      ()=>(
        this.educacion = this.educacion.filter( (e) => e.id_educacion !== edu.id_educacion)
      )
    )
  }

  public toEditEdu = new EventEmitter();

  onEdit: Educacion = {};
  
  ToEdit(edu: Educacion){
    this.toEditEdu.emit(); 
    this.onEdit = edu;
    this.interfaceEdit();
  }

  addEducacion(edu: Educacion){
    this.educacionService.addEducacion(edu).subscribe(
      (educacion: Educacion) => this.educacion.push(educacion)
    )
  }

  popOld(edu: Educacion){
    this.educacion = this.educacion.filter( (e) => e.id_educacion !== edu.id_educacion)
  }

  //-------- Interfaces ----------

  interfaceCardEdit: boolean = false;

  interfaceEdit(){
    this.interfaceCardEdit = !this.interfaceCardEdit
  }
  
}
