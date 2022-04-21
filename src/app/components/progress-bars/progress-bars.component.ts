import { Component, OnInit } from '@angular/core';
import {Bar} from '../../Models/bar';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css']
})
export class ProgressBarsComponent implements OnInit {

  bars: Bar[] = [];
  
  
  constructor() { }

  ngOnInit(): void {
    this.bars = [
      {
        title: 'JavaScript',
        progress: 40,
        active: true,
      },
      {
        title: 'HTML',
        progress: 75,
        active: true
      },
      {
        title: 'CSS',
        progress: 80,
        active: true
      }
    ];
  }


}
