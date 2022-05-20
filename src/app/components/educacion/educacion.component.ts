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

  delete(edu: any){
    this.educacionService.deleteEducacion(edu.id_educacion).subscribe(
      ()=>(
        this.educacion = this.educacion.filter( (e) => e.id_educacion !== edu.id_educacion)
      )
    )
  }


  @Output() toEdit: Educacion = {};
  
  ToEdit(edu: any){
  this.toEdit = edu;
  //this.educacionService.editEducacion(edu).subscribe(
  //   (educacion: Educacion) => this.educacion.push(edu)
  //)
  }

  //Edit(toEdit:any , edu: Educacion){
  //  this.editEducacion = edu
  //  this.editEducacion.id_educacion = toEdit.id_educacion
  //  console.log(this.editEducacion)
  //}

  addEducacion(edu: Educacion){
    console.log(edu)
    this.educacionService.addEducacion(edu).subscribe(
      (educacion: Educacion) => this.educacion.push(edu)
    )
  }
  
}
