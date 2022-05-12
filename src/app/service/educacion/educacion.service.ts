import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Educacion } from '../../Models/Educacion';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiUrl = 'http://localhost:8080/educacion'

  constructor(
    private http:HttpClient
  ) { }

  getEducacion(): Observable<Educacion[]> {
    //const educacion = of()
    return this.http.get<Educacion[]>(`${this.apiUrl}/ver`)
  }

  deleteEducacion(id:number): Observable<any>{
    return this.http.delete(this.apiUrl + "/delete/" + id);

  }

  addEducacion(educacion: Educacion): Observable<Educacion>{
    console.log(educacion);
    return this.http.post<Educacion>(`${this.apiUrl}/new`, educacion, httpOptions);
  }

  //updateTaskReminder(task: Task): Observable<Task>{
  //  const url = `${this.apiUrl}/${task.id}`;
  //  return this.http.put<Task>(url, task, httpOptions)
  //}
  
}
