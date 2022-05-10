import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosCardAddComponent } from './proyectos-card-add.component';

describe('ProyectosCardAddComponent', () => {
  let component: ProyectosCardAddComponent;
  let fixture: ComponentFixture<ProyectosCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosCardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
