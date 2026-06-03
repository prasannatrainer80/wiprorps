import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployAdd } from './employ-add';

describe('EmployAdd', () => {
  let component: EmployAdd;
  let fixture: ComponentFixture<EmployAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
