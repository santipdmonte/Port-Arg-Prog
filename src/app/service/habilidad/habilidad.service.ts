import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habilidad } from '../../Models/Habilidad';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private hab: Habilidad = {};
  
  private apiUrl = 'https://pure-chamber-09792.herokuapp.com/habilidad'

  constructor(
    private http:HttpClient
  ) { }

  get(): Observable<Habilidad[]> {
    return this.http.get<Habilidad[]>(`${this.apiUrl}/ver`)
  }

  delete(id:number): Observable<any>{
    return this.http.delete(this.apiUrl + "/delete/" + id);
  }

  add(habilidad: Habilidad): Observable<Habilidad>{
    return this.http.post<Habilidad>(this.apiUrl + "/new", habilidad, httpOptions);
    
  }
}
