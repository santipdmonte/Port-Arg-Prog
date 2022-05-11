import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../../../service/educacion/educacion.service';

@Component({
  selector: 'app-educacion-card-add',
  templateUrl: './educacion-card-add.component.html',
  styleUrls: ['./educacion-card-add.component.css']
})
export class EducacionCardAddComponent implements OnInit {


  constructor(
    public fb: FormBuilder,
    public educacionService: EducacionService
  ) { }

  ngOnInit(): void {
  }

}
