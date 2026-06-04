import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWallet } from './customer-wallet';

import { of } from 'rxjs';
import { expect } from 'chai';
import { CustomerService } from '../customer-service';


describe('CustomerWallet', () => {
  let component: CustomerWallet;
  let fixture: ComponentFixture<CustomerWallet>;

  const mockWallets = [
    {
      walId: 1,
      cusId: 101,
      walAmount: 5000,
      walSource: 'PAYTM'
    },
    {
      walId: 2,
      cusId: 101,
      walAmount: 3000,
      walSource: 'PHONEPE'
    }
  ];

   const customerServiceMock = {
    showCustomerWallet: () => of(mockWallets)
  };

  beforeEach(async () => {

    localStorage.setItem('cid', '101');

    await TestBed.configureTestingModule({
      imports: [CustomerWallet],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerWallet);
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

    it('should load wallet data', (done) => {
    component.wallets.subscribe(data => {
      expect(data.length).to.equal(2);
      expect(data[0].walId).to.equal(1);
      expect(data[0].walAmount).to.equal(5000);
      // done();
    });
  });

  it('should render wallet records', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('5000');
    expect(compiled.textContent).to.contain('3000');
    expect(compiled.textContent).to.contain('PAYTM');
    expect(compiled.textContent).to.contain('PHONEPE');
  });

  it('should render table headers', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Wallet Id');
    expect(compiled.textContent).to.contain('Customer Id');
    expect(compiled.textContent).to.contain('Wallet Amount');
    expect(compiled.textContent).to.contain('Wallet Source');
  });

  it('should render 2 wallet rows', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const rows = compiled.querySelectorAll('table tr');

    // 1 header row + 2 data rows
    expect(rows.length).to.equal(3);
  });

});
