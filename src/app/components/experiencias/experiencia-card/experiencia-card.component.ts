import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { ExperienciaService } from 'src/app/service/experiencia/experiencia.service';
import { Experiencia } from '../../../Models/Experiencia';

import { faTimes } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-experiencia-card',
  templateUrl: './experiencia-card.component.html',
  styleUrls: ['./experiencia-card.component.css']
})
export class ExperienciaCardComponent implements OnInit {

  showEditInterface: boolean = true;
  subscription?: Subscription;
  experiencia: Experiencia[] = [];

  faTimes = faTimes

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
  }

  deleteClick(){
    this.DeleteClick.emit()
  }

  editClick(){
    this.EditClick.emit()
  }

}
