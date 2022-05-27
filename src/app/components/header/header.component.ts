import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() login: boolean = false;

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

  @Output() onLoginSuccess = new EventEmitter<boolean>();
  @Output() onLoginExit = new EventEmitter<boolean>();

  loginSuccess(){
    this.onLoginSuccess.emit();
    this.login = true
    this.interfaceCardSesion = false
  }

  cerrarSesion(){
    this.onLoginExit.emit();
    this.login = false
  }
  
  //----- interface ----------------------------------------------------

  interfaceCardSesion: boolean = false;

  interfaceSesion(){
    this.interfaceCardSesion = !this.interfaceCardSesion
  }

}
