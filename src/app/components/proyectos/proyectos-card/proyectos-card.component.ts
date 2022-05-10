import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-proyectos-card',
  templateUrl: './proyectos-card.component.html',
  styleUrls: ['./proyectos-card.component.css']
})
export class ProyectosCardComponent implements OnInit {

  faPenToSquare = faPenToSquare
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

}
