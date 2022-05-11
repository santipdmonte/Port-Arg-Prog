import { Component, Input, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { EducacionService } from 'src/app/service/educacion/educacion.service';
import { Educacion } from '../../../Models/Educacion';

import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-educacion-card',
  templateUrl: './educacion-card.component.html',
  styleUrls: ['./educacion-card.component.css']
})
export class EducacionCardComponent implements OnInit {

  showEditInterface: boolean = true;
  subscription?: Subscription;
  educacion: Educacion[] = [];

  faTimes = faTimes
  
  @Input() edu: Educacion = {};
  
  constructor(
    private UiService: UiService,
    private educacionService: EducacionService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

  delete(educacion: any){
    this.educacionService.deleteEducacion(educacion.id_educacion).subscribe((resp) => {
      console.log(resp)
      if (resp){
        this.educacion.pop()
      }
    })
  }
}
