import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewstationComponent as NewstationComponent } from './newstation.component';

describe('NewstationComponent', () => {
  let component: NewstationComponent;
  let fixture: ComponentFixture<NewstationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});