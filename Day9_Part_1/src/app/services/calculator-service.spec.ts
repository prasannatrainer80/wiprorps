import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator-service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should perform `sum` Operation', () => {
    const res = service.add(12,5);
    expect(res).to.equal(17);
  });

  it('Should Perform `sub1 Operation', () => {
    const res = service.sub(12,5);
    expect(res).to.equal(7);
  })

  it('Should Perform `Mult` Operation', () => {
    const res = service.multiply(12, 5);
    expect(res).to.equal(60);
  })

});
