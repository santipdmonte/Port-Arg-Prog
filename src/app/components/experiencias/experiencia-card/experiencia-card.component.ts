import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { ExperienciaService } from 'src/app/service/experiencia/experiencia.service';
import { Experiencia } from '../../../Models/Experiencia';

import * as AOS from 'aos';



@Component({
  selector: 'app-experiencia-card',
  templateUrl: './experiencia-card.component.html',
  styleUrls: ['./experiencia-card.component.css']
})
export class ExperienciaCardComponent implements OnInit {

  @Input() showEditInterface: boolean = false;
  subscription?: Subscription;
  experiencia: Experiencia[] = [];

  @Input() expe: Experiencia = {};
  @Output() DeleteClick = new EventEmitter();
  @Output() EditClick = new EventEmitter();

  constructor(
    private UiService: UiService,
    private experienciaService: ExperienciaService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
    AOS.init();
  }

  deleteClick(){
    this.DeleteClick.emit()
  }

  editClick(){
    this.EditClick.emit()
  }

}
