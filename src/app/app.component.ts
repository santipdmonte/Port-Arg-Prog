import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducacionService } from './service/educacion/educacion.service';
import { PersonasService } from './service/personas/personas.service';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Port-Arg-Prog';

  login: boolean = false;

  constructor (
  ){}

  ngOnInit(): void {
    AOS.init({
      duration: 900,
    });
  }

  loginSuccess(){
    this.login= true;
  }

  loginExit(){
    this.login= false;
  }

}
