import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployForm } from './employ-form';

describe('EmployForm', () => {
  let component: EmployForm;
  let fixture: ComponentFixture<EmployForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
