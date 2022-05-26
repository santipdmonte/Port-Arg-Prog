import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../Models/user'

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private user: User = {};
  
  private apiUrl = 'http://localhost:8080/service/validar'

  constructor(
    private http:HttpClient
  ) { }

    validar(user: User): Observable<User>{
      console.log(user)
      return this.http.post<User>(this.apiUrl, user, httpOptions);
    }

}
