import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaCardAddComponent } from './experiencia-card-add.component';

describe('ExperienciaCardAddComponent', () => {
  let component: ExperienciaCardAddComponent;
  let fixture: ComponentFixture<ExperienciaCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaCardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
