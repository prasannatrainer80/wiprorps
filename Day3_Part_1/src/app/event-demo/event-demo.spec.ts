import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDemo } from './event-demo';

describe('EventDemo', () => {
  let component: EventDemo;
  let fixture: ComponentFixture<EventDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
