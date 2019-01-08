import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarformComponent } from './carform.component';

describe('CarformComponent', () => {
  let component: CarformComponent;
  let fixture: ComponentFixture<CarformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
