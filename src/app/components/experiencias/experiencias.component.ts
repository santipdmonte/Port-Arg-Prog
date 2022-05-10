import { Component, OnInit } from '@angular/core';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  faPenToSquare = faPenToSquare;

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
