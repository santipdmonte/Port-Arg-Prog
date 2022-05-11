import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Educacion } from '../../Models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiUrl = 'http://localhost:8080/educacion/ver'

  constructor(
    private http:HttpClient
  ) { }

  getEducacion(): Observable<Educacion[]> {
    //const educacion = of()
    return this.http.get<Educacion[]>(this.apiUrl)
  }
}
