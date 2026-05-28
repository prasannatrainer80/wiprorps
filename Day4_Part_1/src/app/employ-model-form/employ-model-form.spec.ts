import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployModelForm } from './employ-model-form';

describe('EmployModelForm', () => {
  let component: EmployModelForm;
  let fixture: ComponentFixture<EmployModelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployModelForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployModelForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
