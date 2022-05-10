import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarAddComponent } from './progress-bar-add.component';

describe('ProgressBarAddComponent', () => {
  let component: ProgressBarAddComponent;
  let fixture: ComponentFixture<ProgressBarAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
