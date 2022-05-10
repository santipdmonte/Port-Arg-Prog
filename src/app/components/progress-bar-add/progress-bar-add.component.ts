import { Component, Input, OnInit } from '@angular/core';
import { Bar } from 'src/app/Models/bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress-bar-add',
  templateUrl: './progress-bar-add.component.html',
  styleUrls: ['./progress-bar-add.component.css']
})
export class ProgressBarAddComponent implements OnInit {

  habilidad_nombre: String = "";
  habilidad_rango: Number = 0;
  number: Number = 4

  @Input() bar: Bar = new Bar();
  
  constructor() { }

  ngOnInit(): void {
  }

}
