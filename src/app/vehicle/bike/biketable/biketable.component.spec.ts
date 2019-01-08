import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiketableComponent } from './biketable.component';

describe('BiketableComponent', () => {
  let component: BiketableComponent;
  let fixture: ComponentFixture<BiketableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiketableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiketableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
