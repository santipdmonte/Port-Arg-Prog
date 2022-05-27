import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { AcercaDeService } from 'src/app/service/acerca-de/acerca-de.service';
import { AcercaDe } from '../../Models/AcercaDe';



@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
}) 


export class AcercaDeComponent implements OnInit {
  
  showEditInterface: boolean = false;
  subscription?: Subscription;
  acercade: AcercaDe[] = [];
  editcercade: AcercaDe = {};


  constructor(
    private UiService: UiService,
    private acercaDeService: AcercaDeService
  ) { 
    this.subscription = this.UiService.onToggle()
                            .subscribe(value => this.showEditInterface = value)
  }

  ngOnInit(): void {
    this.acercaDeService.get().subscribe(
      (acercade) => {
        this.acercade = acercade
    });
  }

  editAcercaDe(acer: AcercaDe){
    this.acercaDeService.add(acer).subscribe(
      (acercade: AcercaDe) => this.acercade.push(acercade)
    )
  }

  deleteClick(){
  }

  cancelInterfaceCard(){
    this.interfaceCard= false
  }
  editClick(){
    
  }

  public toEditEdu = new EventEmitter();

  onEdit: AcercaDe = {};
  
  ToEdit(acer: AcercaDe){
    this.toEditEdu.emit()
    this.onEdit = acer;
    this.interfaceEdit();
  }

  // ---------- InterfaceCard ---------

  interfaceCard: boolean = false;

  interfaceEdit(){
    this.interfaceCard = !this.interfaceCard
  }

}
