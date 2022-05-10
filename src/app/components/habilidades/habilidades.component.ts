import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

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
