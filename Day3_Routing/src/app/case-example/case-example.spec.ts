import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseExample } from './case-example';

describe('CaseExample', () => {
  let component: CaseExample;
  let fixture: ComponentFixture<CaseExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
