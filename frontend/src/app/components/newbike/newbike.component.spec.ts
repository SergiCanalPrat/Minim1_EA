import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBikeComponent } from './newbike.component';

describe('NewBikeComponent', () => {
  let component: NewBikeComponent;
  let fixture: ComponentFixture<NewBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
