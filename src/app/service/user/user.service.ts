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
  
  private apiUrl = 'http://localhost:8080/user'

  constructor(
    private http:HttpClient
  ) { }

    validar(user: User): Observable<boolean>{
      return this.http.post<boolean>(`${this.apiUrl}/validar`, user, httpOptions);
    }

    //get(): Observable<User> {
    // return this.http.get<User>(`${this.apiUrl}/traer`)
    //}

}
