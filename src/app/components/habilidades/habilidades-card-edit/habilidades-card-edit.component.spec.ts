import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesCardEditComponent } from './habilidades-card-edit.component';

describe('HabilidadesCardEditComponent', () => {
  let component: HabilidadesCardEditComponent;
  let fixture: ComponentFixture<HabilidadesCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
