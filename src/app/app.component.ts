import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducacionService } from './service/educacion/educacion.service';
import { PersonasService } from './service/personas/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Port-Arg-Prog';

  login: boolean = true;

  constructor (
  ){}

  ngOnInit(): void {

  }

}
