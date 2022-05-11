import { Component, Input, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { EducacionService } from 'src/app/service/educacion/educacion.service';
import { Educacion } from '../../../Models/Educacion';


@Component({
  selector: 'app-educacion-card',
  templateUrl: './educacion-card.component.html',
  styleUrls: ['./educacion-card.component.css']
})
export class EducacionCardComponent implements OnInit {

  @Input() edu: Educacion = {};

  constructor(
  ) { }


  ngOnInit(): void {
  }

}
