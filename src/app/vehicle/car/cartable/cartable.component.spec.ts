import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartableComponent } from './cartable.component';

describe('CartableComponent', () => {
  let component: CartableComponent;
  let fixture: ComponentFixture<CartableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
