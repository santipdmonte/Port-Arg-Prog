import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showEditInterface: boolean = false;
  subscription?: Subscription;

  @Input() login: boolean = true

  constructor(
    private UiService: UiService
  ) {
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
   }

  ngOnInit(): void {
  }

  toggleEditInterface(){
    this.UiService.toggleEditInterface();
  }

  //----- interface ----------------------------------------------------

  interfaceCardSesion: boolean = false;

  interfaceSesion(){
    this.interfaceCardSesion = !this.interfaceCardSesion
    //if (this.interfaceCardEdit){
    //  this.interfaceCardEdit = !this.interfaceCardEdit
    //}
  }

}
