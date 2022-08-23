import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLocationComponent } from './input-location.component';

describe('InputLocationComponent', () => {
  let component: InputLocationComponent;
  let fixture: ComponentFixture<InputLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
