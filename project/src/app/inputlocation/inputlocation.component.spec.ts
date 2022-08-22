import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlocationComponent } from './inputlocation.component';

describe('InputlocationComponent', () => {
  let component: InputlocationComponent;
  let fixture: ComponentFixture<InputlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputlocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
