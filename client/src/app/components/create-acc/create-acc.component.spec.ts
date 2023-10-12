import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateACCComponent } from './create-acc.component';

describe('CreateACCComponent', () => {
  let component: CreateACCComponent;
  let fixture: ComponentFixture<CreateACCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateACCComponent]
    });
    fixture = TestBed.createComponent(CreateACCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
