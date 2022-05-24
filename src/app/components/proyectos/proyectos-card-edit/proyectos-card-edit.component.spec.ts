import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCardEditComponent } from './proyectos-card-edit.component';

describe('ProyectosCardEditComponent', () => {
  let component: ProyectosCardEditComponent;
  let fixture: ComponentFixture<ProyectosCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
