import { Component, Input, OnInit } from '@angular/core';
import { Bar } from 'src/app/Models/bar';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  faPenToSquare = faPenToSquare
  faTimes = faTimes
  showEditInterface: boolean = true;
  subscription?: Subscription;

  @Input() bar: Bar = new Bar();

  constructor(
    private UiService: UiService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

}
