import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { expect } from 'chai';

import { PlaceOrder } from './place-order';
import { VendorService } from '../vendor-service';
import { CustomerService } from '../customer-service';
import { MenuService } from '../menu-service';

describe('PlaceOrder Component', () => {

  let component: PlaceOrder;
  let fixture: ComponentFixture<PlaceOrder>;

  const mockMenus = [
    {
      menId: 1,
      menItem: 'Dosa'
    },
    {
      menId: 2,
      menItem: 'Idly'
    }
  ];

  const mockVendors = [
    {
      venId: 101,
      venName: 'ABC Hotel'
    },
    {
      venId: 102,
      venName: 'XYZ Hotel'
    }
  ];

  const mockWallets = [
    {
      walId: 1,
      walSource: 'PAYTM',
      walAmount: 5000
    }
  ];

  const vendorServiceMock = {
    showVendor: () => of(mockVendors)
  };

  const menuServiceMock = {
    showMenu: () => of(mockMenus)
  };

  const customerServiceMock = {
    showCustomerWallet: () => of(mockWallets),
    placeOrder: () => of('Order Placed Successfully')
  };

  beforeEach(async () => {

    localStorage.setItem('cid', '101');

    await TestBed.configureTestingModule({
      imports: [PlaceOrder, FormsModule],
      providers: [
        { provide: VendorService, useValue: vendorServiceMock },
        { provide: MenuService, useValue: menuServiceMock },
        { provide: CustomerService, useValue: customerServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceOrder);
    component = fixture.componentInstance;

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create component', () => {
    expect(component).to.exist;
  });

  it('should load customer id from localStorage', () => {
    expect(component.orders.cusId).to.equal(101);
  });

  it('should load vendors', (done) => {
    component.vendors.subscribe(data => {
      expect(data.length).to.equal(2);
      expect(data[0].venName).to.equal('ABC Hotel');
      // done();
    });
  });

  it('should load menus', () => {
    component.menus.subscribe(data => {
      expect(data.length).to.equal(2);
      expect(data[0].menItem).to.equal('Dosa');
      // done();
    });
  });

  it('should load wallets', () => {
    component.wallets.subscribe(data => {
      expect(data.length).to.equal(1);
      expect(data[0].walSource).to.equal('PAYTM');
      // done();
    });
  });

  it('should render vendor names', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('ABC Hotel');
    expect(compiled.textContent).to.contain('XYZ Hotel');
  });

  it('should render menu names', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Dosa');
    expect(compiled.textContent).to.contain('Idly');
  });

  it('should render wallet source', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('PAYTM');
  });

  it('should call placeOrder when form is valid', () => {

    let called = false;

    customerServiceMock.placeOrder = () => {
      called = true;
      return of('Order Placed Successfully');
    };

    const mockForm = {
      invalid: false
    } as NgForm;

    component.placeOrder(mockForm);

    expect(called).to.be.true;
  });

  it('should not call placeOrder when form is invalid', () => {

    let called = false;

    customerServiceMock.placeOrder = () => {
      called = true;
      return of('Order Placed Successfully');
    };

    const mockForm = {
      invalid: true
    } as NgForm;

    component.placeOrder(mockForm);

    expect(called).to.be.false;
  });

});