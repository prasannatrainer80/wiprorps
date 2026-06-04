import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { expect } from 'chai';

import { CustomerInfo } from './customer-info';
import { CustomerService } from '../customer-service';

describe('CustomerInfo Component', () => {

  let component: CustomerInfo;
  let fixture: ComponentFixture<CustomerInfo>;

  const mockCustomer = {
    cusId: 1,
    cusName: 'Prasanna',
    cusPhnNo: '9876543210',
    cusUsername: 'prasanna',
    cusEmail: 'prasanna@gmail.com'
  };

  const customerServiceMock = {
    searchByCustomerId: () => of(mockCustomer)
  };

  beforeEach(async () => {

    localStorage.setItem('cid', '1');

    await TestBed.configureTestingModule({
      imports: [CustomerInfo],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create component', () => {
    expect(component).to.exist;
  });

  it('should read customer id from localStorage', () => {
    expect(component.cid).to.equal(1);
  });


  it('should display customer name', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Prasanna');
  });

  it('should display customer email', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('prasanna@gmail.com');
  });

  it('should display customer username', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('prasanna');
  });


  it('should load customer data', () => {
    component.customer.subscribe(data => {
      expect(data.cusId).to.equal(1);
      expect(data.cusName).to.equal('Prasanna');
    });
  });
});