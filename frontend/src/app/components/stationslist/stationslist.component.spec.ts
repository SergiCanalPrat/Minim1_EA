import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationslistComponent } from './stationslist.component';

describe('StationslistComponent', () => {
  let component: StationslistComponent;
  let fixture: ComponentFixture<StationslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
