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

  showEditInterface: boolean = true;
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
    console.log(edu.id_educacion);
    this.educacionService.deleteEducacion(edu).subscribe(
      ()=>(
        this.educacion = this.educacion.filter( (e) => e.id_educacion !== edu.id_educacion)
      )
    )
  }

  public toEditEdu = new EventEmitter();



  onEdit: Educacion = {};
  oldEdit: Educacion = {};
  
  ToEdit(edu: Educacion){
    this.toEditEdu.emit()
    this.onEdit = edu;
    this.interfaceEdit();
  }



  addEducacion(edu: Educacion){
    console.log(edu)
    console.log('guardado en edu')
    this.educacionService.addEducacion(edu).subscribe(
      (educacion: Educacion) => this.educacion.push(educacion)
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
