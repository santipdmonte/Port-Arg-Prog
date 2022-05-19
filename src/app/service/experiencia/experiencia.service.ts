import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Experiencia } from '../../Models/Experiencia';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private expe: Experiencia = {};
  
  private apiUrl = 'http://localhost:8080/experiencia'

  constructor(
    private http:HttpClient
  ) { }

  get(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiUrl}/ver`)
  }

  delete(id:number): Observable<any>{
    return this.http.delete(this.apiUrl + "/delete/" + id);
  }

  add(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(this.apiUrl + "/new", experiencia, httpOptions);
  }

  //editEducacion(educacion: Educacion,toEditId){
    
    //return this.http.post<Educacion>(this.apiUrl + "/new", educacion, httpOptions)
  //}

  //updateTaskReminder(task: Task): Observable<Task>{
  //  const url = `${this.apiUrl}/${task.id}`;
  //  return this.http.put<Task>(url, task, httpOptions)
  //}
  
}
