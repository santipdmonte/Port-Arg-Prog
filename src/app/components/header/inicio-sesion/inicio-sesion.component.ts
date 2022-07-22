import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/service/user/user.service';
import { User } from '../../../Models/User'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  faTimesCircle = faTimesCircle
  user: User = {};

  public userForm = new FormGroup({
    id_user: new FormControl (''),
    user_name: new FormControl ('') ,
    user_password: new FormControl (''),
    rol: new FormControl ('admin'),
    personas_id_persona: new FormControl ('1'),
  });

  constructor(
    public fb: FormBuilder,
    public userService: UserService
  ) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      id_user: [''] ,
      user_name: ['',Validators.required] ,
      user_password: ['',Validators.required],
      rol: ['admin'],
      personas_id_persona: [1],
    })
  }

  //------- Validacion --------

  userValid: boolean = false;
  @Output() loginSuccess = new EventEmitter<boolean>();

  onSubmit(){

    this.userService.validar(this.userForm.value).subscribe(
      (userResponse: boolean) => this.userValid = userResponse
      ); 

    console.log(this.userForm.value)
    console.log('estadoReal: ' + this.userValid)
    this.status();
  }

  contraIncorrecta: boolean = false;

  status(){
    if (this.userValid){  
      this.loginSuccess.emit();
    }
    else if (!this.userValid) {
      this.contraIncorrecta = true
    }
  }

  

  //--------- Interface ------------

  @Output() cancel: EventEmitter<any> = new EventEmitter();

  cancelClick(){
    this.cancel.emit();
  }

}


