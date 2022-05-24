import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciasCardEditComponent } from './experiencias-card-edit.component';

describe('ExperienciasCardEditComponent', () => {
  let component: ExperienciasCardEditComponent;
  let fixture: ComponentFixture<ExperienciasCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciasCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciasCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
