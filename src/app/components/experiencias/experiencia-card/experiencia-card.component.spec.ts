import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaCardComponent } from './experiencia-card.component';

describe('ExperienciaCardComponent', () => {
  let component: ExperienciaCardComponent;
  let fixture: ComponentFixture<ExperienciaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
