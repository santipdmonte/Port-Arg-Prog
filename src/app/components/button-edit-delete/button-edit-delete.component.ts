import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-edit-delete',
  templateUrl: './button-edit-delete.component.html',
  styleUrls: ['./button-edit-delete.component.css']
})
export class ButtonEditDeleteComponent implements OnInit {

  faPenToSquare = faPenToSquare
  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    console.log("Edit!!!")
  }

  onDelete(){
    console.log("Delete!!!")
  }

}
