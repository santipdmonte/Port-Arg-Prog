import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proyecto } from '../../Models/Proyecto';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private proy: Proyecto = {};
  
  private apiUrl = 'https://pure-chamber-09792.herokuapp.com/proyecto'

  constructor(
    private http:HttpClient
  ) { }

  get(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiUrl}/ver`)
  }

  delete(id:number): Observable<any>{
    console.log(id)
    return this.http.delete(this.apiUrl + "/delete/" + id);
  }

  add(proyecto: Proyecto): Observable<Proyecto>{
    console.log(proyecto)
    return this.http.post<Proyecto>(this.apiUrl + "/new", proyecto, httpOptions);
  }
}
