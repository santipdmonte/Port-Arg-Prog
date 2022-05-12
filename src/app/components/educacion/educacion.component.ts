import { Component, OnInit } from '@angular/core';

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

  constructor(
    private UiService: UiService,
    private educacionService: EducacionService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe((educacion) => {
      this.educacion = educacion
    })
  }

  
  addEducacion(edu: Educacion){

    console.log(edu) //

    this.educacionService.addEducacion(edu).subscribe((edu: Educacion) => 
      this.educacion.push(edu)
    )
  }




}
