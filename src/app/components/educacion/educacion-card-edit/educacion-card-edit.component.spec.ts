import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionCardEditComponent } from './educacion-card-edit.component';

describe('EducacionCardEditComponent', () => {
  let component: EducacionCardEditComponent;
  let fixture: ComponentFixture<EducacionCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
