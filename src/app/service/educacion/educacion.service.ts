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

  private edu: Educacion = {};
  
  private apiUrl = 'http://localhost:8080/educacion'

  constructor(
    private http:HttpClient
  ) { }

  getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiUrl}/ver`)
  }

  deleteEducacion(edu: Educacion): Observable<any>{
    return this.http.delete(this.apiUrl + "/delete/" + edu.id_educacion);
  }

  addEducacion(educacion: Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(this.apiUrl + "/new", educacion, httpOptions);
  }

  //editEducacion(educacion: Educacion,toEditId){
    
    //return this.http.post<Educacion>(this.apiUrl + "/new", educacion, httpOptions)
  //}

  //updateTaskReminder(task: Task): Observable<Task>{
  //  const url = `${this.apiUrl}/${task.id}`;
  //  return this.http.put<Task>(url, task, httpOptions)
  //}
  
}
