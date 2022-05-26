import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Input() showEditInterface: boolean = false;
  subscription?: Subscription;
  educacion: Educacion[] = [];

  faTimes = faTimes
  
  @Input() edu: Educacion = {};
  @Output() DeleteClick = new EventEmitter();
  @Output() EditClick = new EventEmitter();
  
  constructor(
    private UiService: UiService,
    private educacionService: EducacionService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

  deleteClick(){
    this.DeleteClick.emit()
  }

  editClick(){
    this.EditClick.emit()
  }

}
