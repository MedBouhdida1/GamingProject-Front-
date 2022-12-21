import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachdetailsComponent } from './coachdetails.component';

describe('CoachdetailsComponent', () => {
  let component: CoachdetailsComponent;
  let fixture: ComponentFixture<CoachdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
