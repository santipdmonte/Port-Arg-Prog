import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeCardComponent } from './acerca-de-card.component';

describe('AcercaDeCardComponent', () => {
  let component: AcercaDeCardComponent;
  let fixture: ComponentFixture<AcercaDeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
