import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/service/user/user.service';
import { User } from '../../../Models/user'

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

  onSubmit(){
    console.log('enviado')
    //if (this.userService.validar(this.userForm.value)){  
    //}
    //console.log(this.userService.validar(this.userForm.value))
    
    //this.cancelClick();
  }

  userResponse: boolean = false;

  click(){
    this.userService.validar(this.userForm.value)
    //console.log(this.userService.validar(this.userForm.value)).subscribe(
    //  (userResponse: boolean) => {this.userResponse = userResponse
    //  });
    
    console.log(this.userService.validar(this.userForm.value))
  }

  //--------- Interface ------------

  @Output() cancel: EventEmitter<any> = new EventEmitter();

  cancelClick(){
    this.cancel.emit();
  }

}


