import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AcercaDeService } from 'src/app/service/acerca-de/acerca-de.service';
import { AcercaDe } from '../../../Models/AcercaDe';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-acerca-de-card',
  templateUrl: './acerca-de-card.component.html',
  styleUrls: ['./acerca-de-card.component.css']
})
export class AcercaDeCardComponent implements OnInit {

  @Input() showEditInterface: boolean = true;
  subscription?: Subscription;
  acercade: AcercaDe[] = [];
  faPenToSquare = faPenToSquare

  @Input() acer: AcercaDe = {};

  constructor(
    private UiService: UiService,
    private acercaDeService: AcercaDeService
  ) {
    this.subscription = this.UiService.onToggle()
    .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

  @Output() EditClick: EventEmitter<any> = new EventEmitter();

  editClick(){
    this.EditClick.emit()
  }

}
