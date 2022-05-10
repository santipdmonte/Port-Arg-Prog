import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditDeleteComponent } from './button-edit-delete.component';

describe('ButtonEditDeleteComponent', () => {
  let component: ButtonEditDeleteComponent;
  let fixture: ComponentFixture<ButtonEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
