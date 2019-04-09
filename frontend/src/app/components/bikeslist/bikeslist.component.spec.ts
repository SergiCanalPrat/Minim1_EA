import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeslistComponent } from './bikeslist.component';

describe('BikeslistComponent', () => {
  let component: BikeslistComponent;
  let fixture: ComponentFixture<BikeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
