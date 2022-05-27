import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AcercaDeService } from '../../../service/acerca-de/acerca-de.service';
import { AcercaDe } from '../../../Models/AcercaDe';
import { empty } from 'rxjs';

@Component({
  selector: 'app-acerca-de-edit',
  templateUrl: './acerca-de-edit.component.html',
  styleUrls: ['./acerca-de-edit.component.css']
})
export class AcercaDeEditComponent implements OnInit {

  @Output() onEditAcercaDe: EventEmitter<AcercaDe> = new EventEmitter();

  @Input() acer :AcercaDe = {};

  public acercaDeForm = new FormGroup({
    id_acerca_de: new FormControl (''),
    descripcion_acerca_de: new FormControl ('') ,
    tecnologias: new FormControl (''),
    url_foto_acerca_de: new FormControl (''),
    personas_id_persona: new FormControl ('1'),
  });

  constructor(
    public fb: FormBuilder,
    public acercaDeService: AcercaDeService
  ) { }

  ngOnInit(): void {

    this.acercaDeForm = this.fb.group({
      id_acerca_de: [this.acer.id_acerca_de,[]] ,
      descripcion_acerca_de: [this.acer.descripcion_acerca_de,Validators.required] ,
      tecnologias: [this.acer.tecnologias,[]],
      url_foto_acerca_de: [this.acer.url_foto_acerca_de,[]],
      personas_id_persona: [this.acer.personas_id_persona],
    })

  }

  onSubmit(){
    this.onEditAcercaDe.emit(this.acercaDeForm.value);
    this.cancel.emit();
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();

  cancelClick(){
    this.cancel.emit();
  }

}
