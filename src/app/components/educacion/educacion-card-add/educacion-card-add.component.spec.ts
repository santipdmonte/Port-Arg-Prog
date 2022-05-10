import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionCardAddComponent } from './educacion-card-add.component';

describe('EducacionCardAddComponent', () => {
  let component: EducacionCardAddComponent;
  let fixture: ComponentFixture<EducacionCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionCardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
