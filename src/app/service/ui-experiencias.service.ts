import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiExperienciasService {

  private showAddExperiencia: boolean = false;
  private subject = new Subject<any>();
  
  constructor() { }

  toggleAddExperiencia(): void {
    this.showAddExperiencia = !this.showAddExperiencia;
    this.subject.next(this.showAddExperiencia);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
