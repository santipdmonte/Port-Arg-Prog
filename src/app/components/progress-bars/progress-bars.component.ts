import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { HabilidadService } from 'src/app/service/habilidad/habilidad.service';
import { Habilidad } from '../../Models/Habilidad';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css']
})
export class ProgressBarsComponent implements OnInit {

  //bars: Bar[] = [];
  
  
  constructor() { }

  ngOnInit(): void {
  //  this.bars = [
  //    {
  //      title: 'JavaScript',
  //      progress: 40,
  //      active: true,
  //    },
  //    {
  //      title: 'HTML',
  //      progress: 75,
  //      active: true
  //    },
  //    {
  //      title: 'CSS',
  //      progress: 80,
   //     active: true
  //    }
  //  ];
  }


}
