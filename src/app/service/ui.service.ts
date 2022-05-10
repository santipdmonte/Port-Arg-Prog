import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showEditInterface: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleEditInterface(): void {
    this.showEditInterface = !this.showEditInterface;
    this.subject.next(this.showEditInterface);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
