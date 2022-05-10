import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-proyectos-card',
  templateUrl: './proyectos-card.component.html',
  styleUrls: ['./proyectos-card.component.css']
})
export class ProyectosCardComponent implements OnInit {

  faPenToSquare = faPenToSquare
  faTimes = faTimes

  showEditInterface: boolean = true;
  subscription?: Subscription;

  constructor(
    private UiService: UiService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

}
