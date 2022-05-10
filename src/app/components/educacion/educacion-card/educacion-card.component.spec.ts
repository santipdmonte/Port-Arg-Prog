import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionCardComponent } from './educacion-card.component';

describe('EducacionCardComponent', () => {
  let component: EducacionCardComponent;
  let fixture: ComponentFixture<EducacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
