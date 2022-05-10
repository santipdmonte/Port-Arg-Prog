import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

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
