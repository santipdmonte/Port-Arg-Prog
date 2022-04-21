import { Component, Input, OnInit } from '@angular/core';
import { Bar } from 'src/app/Models/bar';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() bar: Bar = new Bar();


  constructor() { }

  ngOnInit(): void {
  }

}
