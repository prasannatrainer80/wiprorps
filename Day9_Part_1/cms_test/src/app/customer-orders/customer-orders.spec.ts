import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { expect } from 'chai';

import { CustomerOrders } from './customer-orders';
import { CustomerService } from '../customer-service';

describe('CustomerOrders Component', () => {

  let component: CustomerOrders;
  let fixture: ComponentFixture<CustomerOrders>;

  const mockOrders = [
    {
      ordId: 1,
      cusId: 101,
      venId: 201,
      menId: 301,
      walSource: 'PAYTM',
      ordDate: '2026-06-04',
      ordQuantity: 2,
      ordBillamount: 500,
      ordStatus: 'APPROVED',
      ordComments: 'Delivered'
    },
    {
      ordId: 2,
      cusId: 101,
      venId: 202,
      menId: 302,
      walSource: 'PHONEPE',
      ordDate: '2026-06-05',
      ordQuantity: 1,
      ordBillamount: 250,
      ordStatus: 'PENDING',
      ordComments: 'Waiting'
    }
  ];

  const customerServiceMock = {
    showCustomerOrder: () => of(mockOrders)
  };

  beforeEach(async () => {

    localStorage.setItem('cid', '101');

    await TestBed.configureTestingModule({
      imports: [CustomerOrders],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerOrders);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create component', () => {
    expect(component).to.exist;
  });

  it('should read customer id from localStorage', () => {
    expect(component.cid).to.equal(101);
  });

  it('should load order data', (done) => {
    component.orders.subscribe(data => {
      expect(data.length).to.equal(2);
      expect(data[0].ordId).to.equal(1);
      expect(data[1].ordStatus).to.equal('PENDING');
      // done();
    });
  });

  it('should render order information', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('PAYTM');
    expect(compiled.textContent).to.contain('PHONEPE');
    expect(compiled.textContent).to.contain('APPROVED');
    expect(compiled.textContent).to.contain('PENDING');
  });

  it('should render bill amounts', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('500');
    expect(compiled.textContent).to.contain('250');
  });

  it('should render table headers', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Order Id');
    expect(compiled.textContent).to.contain('Customer Id');
    expect(compiled.textContent).to.contain('Vendor Id');
    expect(compiled.textContent).to.contain('Menu Id');
    expect(compiled.textContent).to.contain('Wallet Source');
    expect(compiled.textContent).to.contain('Order Date');
    expect(compiled.textContent).to.contain('Order Quantity');
    expect(compiled.textContent).to.contain('Order BillAmount');
    expect(compiled.textContent).to.contain('Order Status');
    expect(compiled.textContent).to.contain('Order Comments');
  });

  it('should render 2 order rows', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const rows = compiled.querySelectorAll('table tr');

    // 1 header row + 2 data rows
    expect(rows.length).to.equal(3);
  });

});