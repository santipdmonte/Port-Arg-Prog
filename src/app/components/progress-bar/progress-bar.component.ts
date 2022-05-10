import { Component, Input, OnInit } from '@angular/core';
import { Bar } from 'src/app/Models/bar';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  faPenToSquare = faPenToSquare
  faTimes = faTimes

  @Input() bar: Bar = new Bar();


  constructor() { }

  ngOnInit(): void {
  }

}
