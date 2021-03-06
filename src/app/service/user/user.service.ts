import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../Models/User'

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private user: User = {};
  
  private apiUrl = 'https://pure-chamber-09792.herokuapp.com/user'

  constructor(
    private http:HttpClient
  ) { }

    validar(user: User): Observable<boolean>{
      console.log(user)
      return this.http.post<boolean>(`${this.apiUrl}/validar`, user, httpOptions);
    }

    //get(): Observable<User> {
    // return this.http.get<User>(`${this.apiUrl}/traer`)
    //}

}
