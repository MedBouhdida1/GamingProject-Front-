import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservecoachComponent } from './reservecoach.component';

describe('ReservecoachComponent', () => {
  let component: ReservecoachComponent;
  let fixture: ComponentFixture<ReservecoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservecoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservecoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
