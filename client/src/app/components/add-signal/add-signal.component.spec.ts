import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSignalComponent } from './add-signal.component';

describe('AddSignalComponent', () => {
  let component: AddSignalComponent;
  let fixture: ComponentFixture<AddSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSignalComponent]
    });
    fixture = TestBed.createComponent(AddSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
