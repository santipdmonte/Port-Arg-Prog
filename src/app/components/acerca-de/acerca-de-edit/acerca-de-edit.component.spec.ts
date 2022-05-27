import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeEditComponent } from './acerca-de-edit.component';

describe('AcercaDeEditComponent', () => {
  let component: AcercaDeEditComponent;
  let fixture: ComponentFixture<AcercaDeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
