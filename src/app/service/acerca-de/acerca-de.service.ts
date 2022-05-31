import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcercaDe } from '../../Models/AcercaDe';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private acer: AcercaDe = {};
  
  private apiUrl = 'https://pure-chamber-09792.herokuapp.com/acercade'

  constructor(
    private http:HttpClient
  ) { }

  get(): Observable<AcercaDe[]> {
    return this.http.get<AcercaDe[]>(`${this.apiUrl}/ver`)
  }

  delete(id:number): Observable<any>{
    return this.http.delete(this.apiUrl + "/delete/" + id);
  }

  add(acercade: AcercaDe): Observable<AcercaDe>{
    return this.http.post<AcercaDe>(this.apiUrl + "/new", acercade, httpOptions);
  }

}
