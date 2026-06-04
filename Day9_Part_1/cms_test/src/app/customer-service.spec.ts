import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';

import { CustomerService } from './customer-service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('CustomerService', () => {
  
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CustomerService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    httpMock.verify();
  });

 it('should validate customer', () => {

    const mockResponse = {
      cusId: 1,
      cusUsername: 'prasanna'
    };

    service.validateCustomer('prasanna', 'welcome')
      .subscribe(res => {
        expect(res.cusUsername).to.equal('prasanna');
      });

    const req = httpMock.expectOne(
      'http://localhost:8899/customerLogin/prasanna/welcome'
    );

    expect(req.request.method).to.equal('GET');

    req.flush(mockResponse);
  });

    it('should search customer by id', () => {

    const mockCustomer = {
      cusId: 1,
      custName: 'Prasanna'
    };

    service.searchByCustomerId(1)
      .subscribe(res => {
        expect(res.cusId).to.equal(1);
      });

    const req = httpMock.expectOne(
      'http://localhost:8899/searchcustomer/1'
    );

    expect(req.request.method).to.equal('GET');

    req.flush(mockCustomer);
  });

   it('should place order', () => {

    const order = {
      ordId: 1,
      cusId: 1,
      venId: 101,
      ordBillamount: 500
    };

    service.placeOrder(order as any)
      .subscribe(res => {
        expect(res).to.equal('Order Placed Successfully');
      });

    const req = httpMock.expectOne(
      'http://localhost:8899/placeOrder'
    );

    expect(req.request.method).to.equal('POST');

    req.flush('Order Placed Successfully');
  });

});
