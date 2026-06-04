import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { expect } from 'chai';

import { CustomerDashBoard } from './customer-dash-board';

describe('CustomerDashBoard', () => {
  let component: CustomerDashBoard;
  let fixture: ComponentFixture<CustomerDashBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDashBoard],
       providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDashBoard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    const component = fixture.componentInstance;

    expect(component).to.exist;
  });

  it('should render 5 navigation links', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    const links = compiled.querySelectorAll('a');

    expect(links.length).to.equal(5);
  });

   it('should contain `Customer Info` link', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Customer Info');
  });

  it('should contain `Customer Wallet` link', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Customer Wallet');
  });

  it('should contain `Customer Orders` link', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Customer Orders');
  });

  it('should contain `Customer Pending Orders` link', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Customer Pending Orders');
  });

  it('should contain `Place Order` link', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain('Place Order');
  });


  it('should render dashboard text', () => {
    const fixture = TestBed.createComponent(CustomerDashBoard);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).to.contain(
      'customer-dash-board works!'
    );
  });


});
