import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomecoachComponent } from './becomecoach.component';

describe('BecomecoachComponent', () => {
  let component: BecomecoachComponent;
  let fixture: ComponentFixture<BecomecoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomecoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
